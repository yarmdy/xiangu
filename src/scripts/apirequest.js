const ins = {
    getNewsList(offset,limit){
        return fetch(`/api?APICommand=Fungus_Get_NewInfContent&APIToken=a6d8afcf6b4ad4da34cbe05d501b5a3b&SelectMaxRecords=${limit}&StartRecordCount=${offset}`)
        .then(a=>a.json())
        .then(a=>a.Export.Table.Row.map((b,i)=>({...b,index:i+offset})))
        .catch(e=>{
          return [];
        });
    },
    getNewsTotalCount(){
        return fetch(`/api?APICommand=Fungus_Get_NewInfContent&APIToken=a6d8afcf6b4ad4da34cbe05d501b5a3b&SelectMaxRecords=${100000000}`)
        .then(a=>a.json())
        .then(a=>a.Export.Table.Row.length)
        .catch(a=>console.log(a),0);
    },
    async getNewsListByTotal(offset,limit){
        var total = await ins.getNewsTotalCount();
        if(total==0){
            return {total,list:[]};
        }
        return await ins.getNewsList(offset,limit).then(a=>({total,list:a}));
    },
    createPagerHtml(id,page,total){
        var html=[];
        html.push(`<div id="${id}" class="pagenation pagination_1">`);
        //第一页
        html.push(`<span class="pagePrev">`);
        if(page!=1){
            html.push(`<a>上一页</a>`)
        }else{
            html.push(`<span>上一页</span>`)
        }
        html.push(`</span>`);
        var min = Math.max(page-5,1);
        var max = Math.min(page+5,total)
        var hasBefore = min>2;
        var hasAfter = max<total-1;
        if(hasBefore){
            html.push(`<span class="pageEllipsis"><span>...</span></span>`);
        }
        for(var i = min;i<=max;i++){
            if(i==page){
                html.push(`<span class="pageNo J_pageSelect fk-pageSelect"><span>${i}</span></span>`);
                continue;
            }
            html.push(`<span class="pageNo"><a hidefocus="true" class="g_border js_pagination" href="javascript:;"
            data-href="javascript:;"
            onclick="event.stopPropagation();return false;"><span>${i}</span></a></span>`);
        }
        if(hasAfter){
            html.push(`<span class="pageEllipsis"><span>...</span></span>`);
        }
        //下一页
        html.push(`<span class="pageNext">`);
        if(page!=total){
            html.push(`<a>下一页</a>`)
        }else{
            html.push(`<span>下一页</span>`)
        }
        html.push(`</span>`);
        html.push(`</div>`);
        return html.join("");
    }
};
module.exports = ins;