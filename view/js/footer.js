function updateCities() {
    var provinceSelect = document.getElementById("province");
    var citySelect = document.getElementById("city");
    var selectedProvince = provinceSelect.value;

    // 清空城市下拉框
    citySelect.innerHTML = "";
    var cities = ["全部"]

    if (selectedProvince === "全部") {
        cities = ["全部"]
        citySelect.disabled = true;
    } else if (selectedProvince === "河北") {
        cities = ["全部","石家庄","唐山","秦皇岛","邯郸","邢台","保定","张家口","承德","沧州","廊坊","衡水"];
        citySelect.disabled = false;
    } else if (selectedProvince === "山西") {
        cities = ["全部","太原","大同","阳泉","长治","晋城","朔州","晋中","运城","忻州","临汾","吕梁"];
        citySelect.disabled = false;
    } else if (selectedProvince === "内蒙古") {
        cities = ["全部","呼和浩特","包头","乌海","赤峰","通辽","鄂尔多斯","呼伦贝尔","巴彦淖尔","乌兰察布"];
        citySelect.disabled = false;
    } else if (selectedProvince === "辽宁") {
        cities = ["全部","沈阳","大连","鞍山","抚顺","本溪","丹东","锦州","营口","阜新","辽阳","盘锦","铁岭","朝阳","葫芦岛"];
        citySelect.disabled = false;
    } else if (selectedProvince === "吉林") {
        cities = ["全部","长春","吉林","四平","辽源","通化","白山","松原","白城"];
        citySelect.disabled = false;
    } else if (selectedProvince === "黑龙江") {
        cities = ["全部","哈尔滨","齐齐哈尔","黑河","大庆","伊春","鹤岗","佳木斯","双鸭山","七台河","鸡西","牡丹江","绥化"];
        citySelect.disabled = false;
    } else if (selectedProvince === "江苏") {
        cities = ["全部","南京","徐州","连云港","宿迁","淮安","盐城","扬州","泰州","南通","镇江","常州","无锡","苏州"];
        citySelect.disabled = false;
    } else if (selectedProvince === "浙江") {
        cities = ["全部","杭州","宁波","湖州","嘉兴","舟山","绍兴","衢州","金华","台州","温州","丽水"];
        citySelect.disabled = false;
    } else if (selectedProvince === "安徽") {
        cities = ["全部","合肥","芜湖","蚌埠","淮南","马鞍山","淮北","铜陵","安庆","黄山","滁州","阜阳","宿州","六安","亳州","池州","宣城"];
        citySelect.disabled = false
    } else if (selectedProvince === "广东") {
        cities = ["全部","广州","深圳","清远","韶关","河源","梅州","潮州","汕头","揭阳","汕尾","惠州","东莞","珠海","中山","江门","佛山","肇庆","云浮","阳江","茂名","湛江"];
        citySelect.disabled = false;
    } else if (selectedProvince === "福建") {
        cities = ["全部","厦门","福州","南平","三明","莆田","泉州","漳州","龙岩","宁德"];
        citySelect.disabled = false;
    } else if (selectedProvince === "江西") {
        cities = ["全部","南昌","九江","景德镇","鹰潭","新余","萍乡","赣州","上饶","抚州","宜春","吉安"];
        citySelect.disabled = false;
    } else if (selectedProvince === "山东") {
        cities = ["全部","济南","青岛","聊城","德州","东营","淄博","潍坊","烟台","威海","日照","临沂","枣庄","济宁","泰安","滨州","菏泽"];
        citySelect.disabled = false;
    } else if (selectedProvince === "河南") {
        cities = ["全部","郑州","开封","洛阳","平顶山","安阳","鹤壁","新乡","焦作","濮阳","许昌","漯河","三门峡","南阳","商丘","周口","驻马店","信阳"];
        citySelect.disabled = false;
    } else if (selectedProvince === "湖北") {
        cities = ["全部","武汉","十堰","襄阳","荆门","孝感","黄冈","鄂州","黄石","咸宁","荆州","宜昌","随州"];
        citySelect.disabled = false;
    } else if (selectedProvince === "湖南") {
        cities = ["全部","长沙","衡阳","张家界","常德","益阳","岳阳","株洲","湘潭","郴州","永州","邵阳","怀化","娄底"];
        citySelect.disabled = false;
    } else if (selectedProvince === "广西") {
        cities = ["全部","南宁","桂林","柳州","梧州","贵港","玉林","钦州","北海","防城港","崇左","百色","河池","来宾","贺州"];
        citySelect.disabled = false;
    } else if (selectedProvince === "海南") {
        cities = ["全部","海口","三亚","三沙","儋州"];
        citySelect.disabled = false;
    } else if (selectedProvince === "四川") {
        cities = ["全部","成都","广元","绵阳","德阳","南充","广安","遂宁","内江","乐山","自贡","泸州","宜宾","攀枝花","巴中","达州","资阳","眉山","雅安"];
        citySelect.disabled = false;
    } else if (selectedProvince === "贵州") {
        cities = ["全部","贵阳","六盘水","遵义","安顺","毕节","铜仁"];
        citySelect.disabled = false;
    } else if (selectedProvince === "云南") {
        cities = ["全部","昆明","曲靖","玉溪","丽江","昭通","普洱","临沧","保山"];
        citySelect.disabled = false;
    } else if (selectedProvince === "陕西") {
        cities = ["全部","西安","延安","铜川","渭南","咸阳","宝鸡","汉中","榆林","商洛","安康"];
        citySelect.disabled = false;
    } else if (selectedProvince === "甘肃") {
        cities = ["全部","兰州","嘉峪关","金昌","白银","天水","酒泉","张掖","武威","庆阳","平凉","定西","陇南"];
        citySelect.disabled = false;
    } else if (selectedProvince === "青海") {
        cities = ["全部","西宁","海东"];
        citySelect.disabled = false;
    } else if (selectedProvince === "西藏") {
        cities = ["全部","拉萨","日喀则","昌都","林芝","山南","那曲"];
        citySelect.disabled = false;
    } else if (selectedProvince === "宁夏") {
        cities = ["全部","银川","石嘴山","吴忠","中卫","固原"];
        citySelect.disabled = false;
    } else if (selectedProvince === "新疆") {
        cities = ["全部","乌鲁木齐","克拉玛依","吐鲁番","哈密"];
        citySelect.disabled = false;
    } else if (selectedProvince === "北京") {
        cities = ["全部","东城区","西城区","朝阳区","丰台区","石景山区","海淀区","门头沟区","房山区","大兴区","通州区","顺义区","昌平区","怀柔区","平谷区","密云区","延庆区"];
        citySelect.disabled = false;
    } else if (selectedProvince === "上海") {
        cities = ["全部","黄浦区","徐汇区","长宁区","静安区","普陀区","虹口区","杨浦区","闵行区","宝山区","嘉定区","浦东新区","金山区","松江区","青浦区","奉贤区","崇明区"];
        citySelect.disabled = false;
    } else if (selectedProvince === "天津") {
        cities = ["全部","和平区","河东区","河西区","南开区","河北区","红桥区","东丽区","西青区","津南区","北辰区","武清区","宝坻区","滨海新区","宁河区","静海区","蓟州区"];
        citySelect.disabled = false;
    } else if (selectedProvince === "重庆") {
        cities = ["全部","万州区","涪陵区","渝中区","大渡口区","江北区","沙坪坝区","九龙坡区","南岸区","北碚区","綦江区","大足区","渝北区","巴南区","黔江区","长寿区","江津区","合川区","永川区","南川区","璧山区","铜梁区","潼南区","荣昌区","开州区","梁平区","武隆区","县区"];
        citySelect.disabled = false;
    } else {
        cities = [];
        citySelect.disabled = true;
    }

    // 向城市下拉框添加选项
    for (var i = 0; i < cities.length; i++) {
        var option = document.createElement("option");
        option.value = cities[i];
        option.text = cities[i];
        citySelect.appendChild(option);
    }
}

// 初始化城市下拉框
updateCities();

function keydownToSearch(){
    if (event.keyCode === 13) {
        document.getElementById("searchBtn").click();
    }
}
function show(){
    var inputElement = document.getElementById("kwd");
    var province = document.getElementById("province").value;
    var city = document.getElementById("city").value;
    var age = document.getElementById("age").value;
    var len = inputElement.value.length;

    var minPrice = document.getElementById("minPrice");
    var selectedMinPrice = parseInt(minPrice.value);
    var maxPrice = document.getElementById("maxPrice");
    var selectedMaxPrice = parseInt(maxPrice.value);

    if (selectedMaxPrice >= 100 && selectedMaxPrice <= 2000){
    }else{
        selectedMaxPrice = 10000
    }

    if (len < 1){
        alert("不能为空");
    }else if (len < 2) {
        alert("不能少于2个字符");
    }else if (selectedMinPrice > selectedMaxPrice){
        alert("请选择正确的价格区间！！！");
    }else{
        //做上传的处理
        alert(inputElement.value+" "+province+" "+city+" "+age+" "+selectedMinPrice+" "+selectedMaxPrice);
    }
}
function addition(){
    var a = document.getElementById('addition');
    if(a.style.display === 'block'){
        a.style.display = 'none';
    }else{
        a.style.display = 'block';
    }
}

document.getElementById("searchFrom").addEventListener("submit", function (event) {
    // 阻止表单的默认提交行为
    event.preventDefault();

    // 获取表单数据
    var searchKeyword = document.querySelector('input[name="search"]').value;
    var selectedProvince = document.querySelector('select[name="province"]').value;
    var city = document.querySelector('input[name="city"]').value;

    // 构建查询参数
    var queryParams = `?search=${searchKeyword}&province=${selectedProvince}&city=${city}`;

    // 构建完整URL，替换"/"为服务器端处理的URL
    //var url = "/" + queryParams;

    // 创建并触发GET请求
    fetch("/", {
        method: "GET",
        mode: "cors", // 跨域请求模式，根据需要设置
        headers: {
            "Content-Type": "application/json"
        },
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            // 这里可以处理响应数据
        })
        .catch(error => {
            console.error("Fetch error:", error);
        });
});

document.getElementById("pageFrom").addEventListener("submit", function (event) {
    // 阻止表单的默认提交行为
    event.preventDefault();

    // 获取表单数据
    var pageSelect = document.getElementById("page").value;

    // 构建查询参数
    var queryParams = `&page=${pageSelect}`;
    var currentURL = window.location.search;

    // 构建完整URL，替换"/"为服务器端处理的URL
    var url = currentURL + queryParams;

    // 创建并触发GET请求
    fetch(url, {
        method: "GET",
        mode: "cors", // 跨域请求模式，根据需要设置
        headers: {
            "Content-Type": "application/json"
        },
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            // 这里可以处理响应数据
        })
        .catch(error => {
            console.error("Fetch error:", error);
        });
});