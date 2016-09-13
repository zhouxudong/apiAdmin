var NavMap = {
    appmanager: {
        id: 'appmanager',
        title: "API后台管理",
        url: "/appmanager/basicofig/index",
        level: "nav-first-level",
        icon: "fa fa-joomla",
        subs: [
            {
                id: "appmanager",
                title: "应用管理",
                url: "/appmanager",
                icon: "fa fa-th-large",
                level: "nav-second-level",
                subs: [
                    {
                        id: "basicofig",
                        title: "基本配置",
                        url: "/appmanager/basicofig",
                        level: "nav-third-level",
                        subs: [
                            {
                                id: "baseInfo",
                                title: "基本信息",
                                url: "/appmanager/basicofig/index",
                            },
                            {
                                id: "publish",
                                title: "服务器部署",
                                url: "/appmanager/basicofig/publish",
                            }
                        ],
                    },
                    {
                        id: "outnetcofig",
                        title: "外网配置",
                        url: "/appmanager/outnet",
                        level: "nav-third-level",
                        subs: [
                            {
                                id: "accessurl",
                                url: "/appmanager/outnet/accessurl",
                                title: "访问地址"
                            },
                            {
                                id: "ipsecure",
                                url: "/appmanager/outnet/ipsecure",
                                title: "IP安全"
                            }
                        ]
                    },
                    {
                        id: "innernet",
                        title: "内网配置",
                        url: "/appmanager/innernet",
                        level: "nav-third-level",
                        subs: [
                            { id: "accessurl", url: "/appmanager/innernet/accessurl", title: "访问地址"},
                            { id: "securegroup", url: "/appmanager/innernet/securegroup", title: "安全组"},
                            { id: "secretManager", url: "/appmanager/innernet/secretmanager", title: "密钥管理"}
                        ]
                    }

                ]
            },
            {
                id: "apimanager",
                url: "/apimanager",
                title: "API管理",
                icon: "fa fa-stethoscope",
                level: "nav-second-level",
                subs: [
                    {
                        id: "edit",
                        url: "/apimanager/edit",
                        title: "编辑"
                    },
                    {
                        id: "deploy",
                        url: "/apimanager/deploy",
                        title: "部署"
                    }
                ]
            },
            {
                id: "postman",
                title: "POSTMAN",
                url: '/postman',
                icon: "fa fa-globe",
                level: "nav-second-level",
                subs: [
                    {
                        id: 'detail',
                        title: "详情",
                        url: "/postman/index",
                    }
                ]
            },
            {
                id: "apidoc",
                title: "API文档",
                url: "/apidoc",
                icon: "fa fa-book",
                level: "nav-second-level",
                subs: [
                    {
                        id: "index",
                        title: "首页",
                        url: "/apidoc/index",
                    }
                ]
            },
            {
                id: "syscfg",
                title: "系统配置",
                url: "/syscfg",
                icon: "fa fa-laptop",
                level: "nav-second-level",
                subs: [
                    {
                        id: 'Ngix',
                        title: "Ngix",
                        url: "/syscfg/ngix"
                    },
                    {
                        id: "apache",
                        url: "/syscfg/apache",
                        title: "Apache"
                    }
                ]
            }

        ]
    }, //API后台管理
    renrengo: {
        id: "renrengo",
        title: "人人购管理",
        url: "/notice_push/push_message",
        level: "nav-first-level",
        icon: "fa fa-binoculars",
        subs: [
            {
                title: "公告推送",
                url: "/notice_push/push_message",
                level: "nav-second-level",
                icon: "fa fa-send",
                subs: [
                    {
                        title: "推送消息",
                        url: "/notice_push/push_message",
                        level: "nav-third-level",
                        icon: "fa fa-th-large"
                    }
                ]
            },
            {
                id: "advertPut",
                title: "广告投放",
                url: "/advert_put",
                level: "nav-second-level",
                icon: "fa fa-puzzle-piece"
            },
            {
                id: "orderManage",
                title: "订单管理",
                url: "/order_manage/list",
                level: "nav-second-level",
                icon: "fa fa-outdent",
                subs: [
                    {
                        id: "list",
                        title: "订单列表",
                        url: "/order_manage/list"
                    }
                ]
            },
            {
                id: "newsManage",
                title: "新闻管理",
                url: "/news_manage/list",
                level: "nav-second-level",
                icon: "fa fa-newspaper-o",
                subs: [
                    {
                        title: "新闻列表",
                        url: "/news_manage/list",
                        level: "nav-third-level",
                        icon: "fa fa-sitemap"
                    }
                ]
            },
            {
                id: "memberManage",
                title: "会员管理",
                url: "/member_manage",
                level: "nav-second-level",
                icon: "fa fa-vimeo-square"
            }
        ]
    },//人人购管理
    allmgr:{
        id: "allmgr",
        title: "商品管理",
        url: "/productmgr/list",
        level: "nav-first-level",
        icon: "fa fa-vimeo-square",
        subs: [
            {
                id: "productmgr",
                title: "商品管理",
                url: "/productmgr",
                level: "nav-second-level",
                icon: "fa fa-th-large",
                subs: [
                    {
                        id: "list",
                        title: "商品列表",
                        url: "/productmgr/list",
                        level: "nav-third-level",
                        icon: "fa fa-th-large"
                    },
                    {
                        id: "specif",
                        title: "商品规格",
                        url: "/productmgr/specif",
                        level: "nav-third-level",
                        icon: "fa fa-th-large"
                    },
                    {
                        id: "attr",
                        title: "商品属性",
                        url: "/productmgr/attr",
                        level: "nav-third-level",
                        icon: "fa fa-th-large"
                    }
                ]
            },
            {
                id: "category",
                title: "分类管理",
                url: "/categorymgr",
                level: "nav-second-level",
                icon: "fa fa-sitemap",
                subs: [
                    {
                        id: "categorylist",
                        title: "分类列表",
                        url: "/categorymgr/list",
                        level: "nav-third-level",
                        icon: "fa fa-sitemap"
                    }
                ]
            },
            {
                id: "stock",
                title: "仓库管理",
                url: "/stockmgr",
                level: "nav-second-level",
                icon: "fa fa-cubes",
                subs: [
                    {
                        id: "stocklist",
                        title: "仓库列表",
                        url: "/stockmgr/list",
                        level: "nav-third-level",
                        icon: "fa fa-cubes"
                    }
                ]
            }
        ]
    },  //商品管理
    examine: {
        id: "examine",
        title: "资格审核",
        url: "/examine/recharge",
        level: "nav-first-level",
        icon: "fa fa-adjust",
        subs: [
            {
                id: "recharge",
                title: "充值审核",
                url: "/examine/recharge",
                level: "nav-second-level",
                icon: "fa fa-rmb"
            },
            {
                id: "initfail",
                title: "初审失败",
                url: "/examine/initfail",
                level: "nav-second-level",
                icon: "fa fa-times-circle-o"
            },
            {
                id: "re_check",
                title: "充值复核",
                url: "/examine/re_check",
                level: "nav-second-level",
                icon: "fa fa-dot-circle-o"
            },
            {
                id: "success",
                title: "充值成功",
                url: "/examine/success",
                level: "nav-second-level",
                icon: "fa fa-check-square-o"
            },
            {
                id: "recheck_fail",
                title: "复核失败",
                url: "/examine/recheck_fail",
                level: "nav-second-level",
                icon: "fa fa-warning"
            }
        ]
    }//资格审核
    //productmgr: {
    //    id: "productmgr",
    //    title: "商品管理",
    //    url: "/productmgr/list",
    //    level: "nav-first-level",
    //    icon: "fa fa-th-large",
    //    subs: [
    //        {
    //            id: "list",
    //            title: "商品列表",
    //            url: "/productmgr/list",
    //            level: "nav-second-level",
    //            icon: "fa fa-th-large"
    //        },
    //        {
    //            id: "specif",
    //            title: "商品规格",
    //            url: "/productmgr/specif",
    //            level: "nav-second-level",
    //            icon: "fa fa-th-large"
    //        },
    //        {
    //            id: "attr",
    //            title: "商品属性",
    //            url: "/productmgr/attr",
    //            level: "nav-second-level",
    //            icon: "fa fa-th-large"
    //        }
    //    ]
    //},
    //categorymgr: {
    //    id: "category",
    //    title: "分类管理",
    //    url: "/categorymgr/list",
    //    level: "nav-first-level",
    //    icon: "fa fa-sitemap",
    //    subs: [
    //        {
    //            id: "categorylist",
    //            title: "分类列表",
    //            url: "/categorymgr/list",
    //            level: "nav-second-level",
    //            icon: "fa fa-sitemap"
    //        }
    //    ]
    //},
    //stockmgr: {
    //    id: "stock",
    //    title: "仓库管理",
    //    url: "/stockmgr/list",
    //    level: "nav-first-level",
    //    icon: "fa fa-cubes",
    //    subs: [
    //        {
    //            id: "stocklist",
    //            title: "仓库列表",
    //            url: "/stockmgr/list",
    //            level: "nav-second-level",
    //            icon: "fa fa-cubes"
    //        }
    //    ]
    //}

}

export default NavMap;