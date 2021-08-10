(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{572:function(e,s,t){"use strict";t.r(s);var r=t(29),n=Object(r.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"opensuse-mirror"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#opensuse-mirror"}},[e._v("#")]),e._v(" "),t("RouterLink",{attrs:{to:"/opensuse/"}},[e._v("Opensuse")]),e._v(" Mirror")],1),e._v(" "),t("h2",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),t("blockquote",[t("p",[e._v("openSUSE, formerly SUSE Linux, is a Linux distribution sponsored by SUSE Software Solutions Germany GmbH and other companies.")])]),e._v(" "),t("h2",{attrs:{id:"禁用原有软件源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#禁用原有软件源"}},[e._v("#")]),e._v(" 禁用原有软件源")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("zypper")]),e._v(" mr -da\n")])])]),t("h2",{attrs:{id:"添加南科大镜像源-以-opensuse-leap-42-3-为例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加南科大镜像源-以-opensuse-leap-42-3-为例"}},[e._v("#")]),e._v(" 添加南科大镜像源，以 openSUSE Leap 42.3 为例：")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("zypper")]),e._v(" ar -fcg https://mirrors.sustech.edu.cn/opensuse/distribution/leap/42.3/repo/oss SUSTC:42.3:OSS\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("zypper")]),e._v(" ar -fcg https://mirrors.sustech.edu.cn/opensuse/distribution/leap/42.3/repo/non-oss SUSTC:42.3:NON-OSS\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("zypper")]),e._v(" ar -fcg https://mirrors.sustech.edu.cn/opensuse/update/leap/42.3/oss SUSTC:42.3:UPDATE-OSS\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("zypper")]),e._v(" ar -fcg https://mirrors.sustech.edu.cn/opensuse/update/leap/42.3/non-oss SUSTC:42.3:UPDATE-NON-OSS\n")])])]),t("p",[e._v("命令中最后一个参数为每一个源指定了一个 alias （别称），可以根据个人喜好更改。")]),e._v(" "),t("h2",{attrs:{id:"手动刷新软件源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#手动刷新软件源"}},[e._v("#")]),e._v(" 手动刷新软件源")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("zypper")]),e._v(" ref\n")])])]),t("h3",{attrs:{id:"图形界面下配置方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#图形界面下配置方法"}},[e._v("#")]),e._v(" 图形界面下配置方法")]),e._v(" "),t("p",[e._v("以 openSUSE Leap 42.3 为例：")]),e._v(" "),t("ol",[t("li",[e._v("打开 YaST；")]),e._v(" "),t("li",[e._v("点击 Software 分组中的 Software Repositories；")]),e._v(" "),t("li",[e._v("在打开的窗口上方的列表中点击 openSUSE-Leap-42.3-Oss ，点击 Edit；")]),e._v(" "),t("li",[e._v("将 download.opensuse.org 替换为 mirrors.ustc.edu.cn/opensuse，点OK；")]),e._v(" "),t("li",[e._v("再用同样的方法编辑 openSUSE-Leap-42.3-Oss 和 openSUSE-Leap-42.3-Oss。")])]),e._v(" "),t("h2",{attrs:{id:"注意事项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[e._v("#")]),e._v(" 注意事项")]),e._v(" "),t("ul",[t("li",[e._v("由于使用了 MirrorBrain 技术， 中央服务器 (download.opensuse.org) 会按照 IP 地理位置中转下载请求到附近的镜像服务器（但刷新软件源时仍从中央服务器获取 元数据），所以更改软件源通常只会加快刷新软件源的速度，而对下载速度影响不大。 参见 "),t("a",{attrs:{href:"https://forum.suse.org.cn/t/opensuse/1759",target:"_blank",rel:"noopener noreferrer"}},[e._v("openSUSE 中文论坛"),t("OutboundLink")],1),e._v(" 。")]),e._v(" "),t("li",[e._v("我们不提供 source 和 debug 源。")]),e._v(" "),t("li",[e._v("Tumbleweed 滚动发行版软件源的地址与上述例子稍有不同。")])]),e._v(" "),t("h2",{attrs:{id:"相关链接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#相关链接"}},[e._v("#")]),e._v(" 相关链接")]),e._v(" "),t("ul",[t("li",[e._v("官方主页 "),t("a",{attrs:{href:"https://www.opensuse.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.opensuse.org/"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("邮件列表 "),t("a",{attrs:{href:"https://en.opensuse.org/Communicate/Mailinglists",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://en.opensuse.org/Communicate/Mailinglists"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("论坛 "),t("a",{attrs:{href:"https://forums.opensuse.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://forums.opensuse.org/"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("中文论坛 "),t("a",{attrs:{href:"https://forum.suse.org.cn/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://forum.suse.org.cn/"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("Wiki "),t("a",{attrs:{href:"https://en.opensuse.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://en.opensuse.org/"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("中文 Wiki "),t("a",{attrs:{href:"https://zh.opensuse.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://zh.opensuse.org/"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("文档 "),t("a",{attrs:{href:"https://en.opensuse.org/Documentation",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://en.opensuse.org/Documentation"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("openSUSE Guide "),t("a",{attrs:{href:"https://lug.ustc.edu.cn/sites/opensuse-guide/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://lug.ustc.edu.cn/sites/opensuse-guide/"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"参考文档"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[e._v("#")]),e._v(" 参考文档")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://mirrors.ustc.edu.cn/help/opensuse.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://mirrors.ustc.edu.cn/help/opensuse.html"),t("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);