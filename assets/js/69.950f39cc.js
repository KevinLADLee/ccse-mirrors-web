(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{570:function(t,e,a){"use strict";a.r(e);var s=a(29),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"pypi-mirror"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pypi-mirror"}},[t._v("#")]),t._v(" "),a("RouterLink",{attrs:{to:"/pypi/simple/"}},[t._v("PyPI")]),t._v(" Mirror")],1),t._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://pypi.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("PyPI"),a("OutboundLink")],1),t._v(', a.k.a. the Python Package Index, is a centralized "repository of software for the Python programming language".')]),t._v(" "),a("p",[t._v("The PyPI Mirror is synchronized with "),a("a",{attrs:{href:"https://pypi.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("pypi.org"),a("OutboundLink")],1),t._v(" with "),a("a",{attrs:{href:"https://pypi.org/project/bandersnatch/",target:"_blank",rel:"noopener noreferrer"}},[t._v("bandersnatch"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"tl-dr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tl-dr"}},[t._v("#")]),t._v(" TL;DR")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --upgrade pip --index-url https://mirrors.sustech.edu.cn/pypi/simple\npip config "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" global.index-url https://mirrors.sustech.edu.cn/pypi/simple\n")])])]),a("p",[t._v("That's all.")]),t._v(" "),a("h2",{attrs:{id:"detailed-instructions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#detailed-instructions"}},[t._v("#")]),t._v(" Detailed Instructions")]),t._v(" "),a("h3",{attrs:{id:"_1-confirm-your-python-environment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-confirm-your-python-environment"}},[t._v("#")]),t._v(" 1. Confirm your python environment")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("python")]),t._v(" and "),a("code",[t._v("pip")]),t._v(" commands you're using may be")]),t._v(" "),a("ul",[a("li",[t._v("installed with package manager (e.g., "),a("code",[t._v("apt-get")]),t._v(", "),a("code",[t._v("yum")]),t._v(", etc.)")]),t._v(" "),a("li",[t._v("self-compiled")]),t._v(" "),a("li",[t._v("isolated by a python 3 venv (virtual environment)")]),t._v(" "),a("li",[t._v("equipped with Anaconda or installed in a conda virtual environment")]),t._v(" "),a("li",[t._v("bundled with Intel Parallel Studio")]),t._v(" "),a("li",[t._v("...")])]),t._v(" "),a("p",[t._v("You can execute the following commands to gain insight into the "),a("code",[t._v("pip")]),t._v(" command that you are using.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("which")]),t._v(" pip\npip --version\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("For Python 3 Users:")]),t._v(" "),a("p",[t._v("You may need to replace "),a("code",[t._v("pip")]),t._v(" with "),a("code",[t._v("pip3")]),t._v(".")])]),t._v(" "),a("h3",{attrs:{id:"_2-configure-index-url"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-configure-index-url"}},[t._v("#")]),t._v(" 2. Configure Index-url")]),t._v(" "),a("h4",{attrs:{id:"for-pip-10-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#for-pip-10-0"}},[t._v("#")]),t._v(" For pip >= 10.0")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("pip config "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" global.index-url https://mirrors.sustech.edu.cn/pypi/simple\n")])])]),a("div",{staticClass:"custom-block warning"},[a("ul",[a("li",[t._v("Use the "),a("code",[t._v("https")]),t._v(" schema instead of "),a("code",[t._v("http")])]),t._v(" "),a("li",[t._v("Don't omit "),a("code",[t._v("simple")])])])]),t._v(" "),a("h4",{attrs:{id:"for-older-versions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#for-older-versions"}},[t._v("#")]),t._v(" For older versions")]),t._v(" "),a("p",[t._v("You can upgrade to the latest version first:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# you may need root privilege")]),t._v("\npip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --upgrade pip --index-url https://mirrors.sustech.edu.cn/pypi/simple\n")])])]),a("p",[t._v("Or, you can stay with the old version and manually edit the configuration file with your text editor:")]),t._v(" "),a("div",{staticClass:"language-toml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-toml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("global")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("index-url")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" https://mirrors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sustech"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("edu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cn/pypi/simple\n")])])]),a("p",[t._v("Path of the per-user configuration file:")]),t._v(" "),a("ul",[a("li",[t._v("Linux: "),a("code",[t._v("$HOME/.config/pip/pip.conf")])]),t._v(" "),a("li",[t._v("macOS: "),a("code",[t._v("$HOME/Library/Application Support/pip/pip.conf")]),t._v(" or "),a("code",[t._v("$HOME/.config/pip/pip.conf")])]),t._v(" "),a("li",[t._v("Windows: "),a("code",[t._v("%APPDATA%\\pip\\pip.ini")])])]),t._v(" "),a("p",[t._v("You may create a new file if it doesn't exist.")]),t._v(" "),a("p",[t._v("You can refer to "),a("a",{attrs:{href:"https://pip.pypa.io/en/stable/user_guide/#configuration",target:"_blank",rel:"noopener noreferrer"}},[t._v("pip user guide"),a("OutboundLink")],1),t._v(" for per-virtualenv or site-wide configuration.")]),t._v(" "),a("h2",{attrs:{id:"temporary-use"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#temporary-use"}},[t._v("#")]),t._v(" Temporary Use")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" package-name --index-url https://mirrors.sustech.edu.cn/pypi/simple\n")])])]),a("h2",{attrs:{id:"install-packages-without-root-privilege"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-packages-without-root-privilege"}},[t._v("#")]),t._v(" Install Packages without Root Privilege")]),t._v(" "),a("p",[t._v("In an environment where you have no root access, like SUSTech Taiyi/Qiming HPC or your lab machines, you are still able to install the python dependencies you want.")]),t._v(" "),a("h3",{attrs:{id:"option-1-python-3-venv-suggested"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#option-1-python-3-venv-suggested"}},[t._v("#")]),t._v(" Option 1: Python 3 Venv (Suggested)")]),t._v(" "),a("p",[t._v("You can create multiple virtual environments in your home directory so that you can have dependencies of different versions for different projects.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1. Create a virtual environment")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("user@host ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("$ python3 -m venv ~/venv-torch\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2. Activate the virtual environment")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("user@host ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" ~/venv-torch/bin/activate\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 3. Now you are in the venv")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("venv-torch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("user@host ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("$ pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --upgrade pip  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# optional")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("venv-torch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("user@host ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("$ pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" torch torchvision\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("venv-torch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("user@host ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("$ python my_awesome_network.py\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 4. Leave the virtual environment")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("venv-torch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("user@host ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("$ deactivate\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("user@host ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("$  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# now you've come back")]),t._v("\n")])])]),a("p",[t._v("Essentially, this approach creates symbolic links for system-wide python.")]),t._v(" "),a("p",[t._v("Please refer to "),a("a",{attrs:{href:"https://docs.python.org/3/library/venv.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.python.org/3/library/venv.html"),a("OutboundLink")],1),t._v(" for detailed usage.")]),t._v(" "),a("h3",{attrs:{id:"option-2-pip-user-install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#option-2-pip-user-install"}},[t._v("#")]),t._v(" Option 2: Pip User Install")]),t._v(" "),a("p",[t._v("Suppose you're using Python 3.7 and you want to install Numpy. You can simply run:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --user numpy  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# you may need to use pip3")]),t._v("\n")])])]),a("p",[t._v("By default, "),a("code",[t._v("numpy")]),t._v(" would be installed to "),a("code",[t._v("~/.local/lib/python3.7/site-packages/numpy-*")]),t._v(". This method is not suggested if you are sharing an account with others.")]),t._v(" "),a("p",[t._v("Please refer to "),a("a",{attrs:{href:"https://pip.pypa.io/en/stable/user_guide/#user-installs",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://pip.pypa.io/en/stable/user_guide/#user-installs"),a("OutboundLink")],1),t._v(" for detailed usage.")]),t._v(" "),a("h3",{attrs:{id:"option-3-conda-virtual-environment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#option-3-conda-virtual-environment"}},[t._v("#")]),t._v(" Option 3: Conda virtual environment")]),t._v(" "),a("p",[t._v("If you need Python of different versions, for example, Python 3.4 for project A and Python 3.7 for project B, you can consider create several Conda environments.")]),t._v(" "),a("p",[t._v("Please refer to "),a("a",{attrs:{href:"https://docs.conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html"),a("OutboundLink")],1),t._v(" for detailed usage.")])])}),[],!1,null,null,null);e.default=n.exports}}]);