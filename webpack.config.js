// Generated using webpack-cli https://github.com/webpack/webpack-cli
const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {PurgeCSSPlugin} = require('purgecss-webpack-plugin');

//const {IgnorePlugin} = require('webpack');


//const __filename = fileURLToPath(import.meta.url);  // 获取当前文件路径
//const __dirname = dirname(__filename);  // 获取当前文件的


const isProduction = process.env.NODE_ENV == 'production';


const stylesHandler = MiniCssExtractPlugin.loader;


/** @type {import('webpack').Configuration} */
const config = {
    stats: {
        errorDetails: true,
    },
    entry: {
        home:'./src/home.js',
        news:'./src/news.js',
        about:'./src/about.js',
        newslist:'./src/newslist.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename:"[name].js",
        clean:true
    },
    devServer: {
        open: '/home.html',
        host: 'localhost',
        server: {
            type: 'https',
            options: {
                pfx: fs.readFileSync(path.resolve(__dirname, 'iis.pfx')), // PFX 文件
                passphrase: '123' // 如果 .pfx 文件有密码
            }
        },
        proxy:[
            {
                context: ['/api'],  // 可以匹配路径的前缀
                target: 'https://fungustest.infrontsmart.com',  // 目标服务地址
                changeOrigin: true, // 修改请求头中的 Origin 字段
                //pathRewrite: { '/api': '' }, // 将路径中的 /api 去掉
                secure: false, // 是否验证 SSL
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/home.html',
            filename:"home.html",
            chunks: ['home']
        }),
        new HtmlWebpackPlugin({
            template: './src/news.html',
            filename:"news.html",
            chunks: ['news']
        }),
        new HtmlWebpackPlugin({
            template: './src/about.html',
            filename:"about.html",
            chunks: ['about']
        }),
        new HtmlWebpackPlugin({
            template: './src/newslist.html',
            filename:"newslist.html",
            chunks: ['newslist']
        }),

        new MiniCssExtractPlugin(),

        // new PurgeCSSPlugin({
        //     paths:glob.sync(`${paths.src}/**/*`,{nodir:true})
        // }),

        // new IgnorePlugin({
        //     checkResource(resource,context) {
        //         // 如果资源路径匹配 'require' 或 'define'，则忽略
        //         return /\/scripts\//i.test(resource);
        //     }
        // })

        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                loader: 'ts-loader',
                exclude: ['/node_modules/'],
            },
            {
                test: /\.css$/i,
                use: [stylesHandler,'css-loader','./src/preprocessing-loader.js']
            },
            {
                test: /\.s[ac]ss$/i,
                use: [stylesHandler, 'css-loader', 'sass-loader','./src/preprocessing-loader.js']
            },
            {
                test: /\.(svg|png|jpg|gif|webp|htc)$/i,
                type: 'asset',
                parser:{
                    dataUrlCondition: {
                        maxSize: 20480, // 小于 8KB 的图片转为 Data URL
                    }
                },
                generator:{
                    filename:"image/[name][hash][ext][query]"
                }
            },
            {
                test: /\.htc$/i,
                type: 'asset',
                parser:{
                    dataUrlCondition: {
                        maxSize: 20480, // 小于 8KB 的图片转为 Data URL
                    }
                },
                generator:{
                    filename:"htc/[name][hash][ext][query]"
                }
            },
            {
                test:/qrCode\.png$/i,
                type: 'asset',
                parser:{
                    dataUrlCondition: {
                        maxSize: 20480, // 小于 8KB 的图片转为 Data URL
                    }
                },
                generator:{
                    filename:"image/[name][ext]"
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource', // 大于指定大小的文件将生成单独的文件
                generator:{
                    filename:"fonts/[name][hash][ext][query]"
                }
            },
            
            {
                test: /\.txt/,
                type: 'asset/source'
            },
            {
                test: /\.html$/,
                use: [
                //     {
                //     loader:'extract-loader'
                // },
                {
                    loader:'html-loader',
                    options:{
                        minimize:false,
                        sources: {
                            list:[
                                '...',
                                {
                                    attribute:"data-original",
                                    type: 'src',
                                    filter: (tag, attribute, attributes, resourcePath) => {
                                        // The `tag` argument contains a name of the HTML tag.
                                        // The `attribute` argument contains a name of the HTML attribute.
                                        // The `attributes` argument contains all attributes of the tag.
                                        // The `resourcePath` argument contains a path to the loaded HTML file.
                      
                                        // choose all HTML tags except img tag
                                        return tag.toLowerCase() == 'img';
                                    },
                                }
                            ]
                        }
                    }
                },'./src/preprocessing-loader.js'],
            },
            {
                test:/\.js$/i,
                use:[
                    {
                        loader:'babel-loader'
                    }
                ]
            }
            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
    },
    optimization:{
        realContentHash:false
    },
    // externals:{
    //     jquery: 'jQuery',  // 假设你有一个外部的 jQuery 依赖
    // }
};



exports.default = () => {
    if (isProduction) {
        config.mode = 'production';
        
        
    } else {
        config.mode = 'development';
    }
    return config;
};
// https://www.ychxmt.com/