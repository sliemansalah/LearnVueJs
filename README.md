# LearnVueJs
From zero to end

# ملاحظة التوافق

لا تدعم الاكسبلولر 8 وتحته لأنه يستخدم ميزات الاكماسكربت 5 غير قابلة للازاحة ، ومع ذلك فهو يدعم جميع المتصفحات المتوافقة مع الاكماسكربت 5 

# الإصدار الدلالي
تتبع فيو الإصدار الدلالي في جميع مشاريعها الرسمية للميزات والسلوك الموثقين

# ملاحظات الإصدار

أحدث نسخة مستقرة: 2.6.11

# فيو ديف تولز

يتيح لك فحص وتصحيح تطبيقات الفيو في واجهة سهلة الاستخدام

# ملاحظة مهمة
لا تستخدم الإصدار المصغر أثناء التطوير. سوف تفوتك كل التحذيرات الجميلة عن الأخطاء الشائعة
don't use minifed version during development.

# هناك نوعين من العمل في فيو جي اس
1- cdn
2- cli

# npm 

هي طريقة التثبيت الموصى بها عند إنشاء تطبيقات فيو جي اس كبيرة الحجم، وتمتزج بحزم  مثل الويب باك والبراوسريفاي


# cli

يلزم تسطيب نود جي اس ، وهي بيئة عمل توفر العمل لدى مشاريع فيو جي اس


# different builds 

في 
dist
دليل حزمة npm
ستجد العديد من  فيو جي اس بيلدرز والفرق بينهما
-----------
1- UMD  -> vue.js
2- CommonJS	 -> vue.common.js
3- ES Module (for bundlers)	 -> vue.esm.js
4- ES Module (for browsers) -> vue.esm.browser.js


vue.js -> full
vue.runtime.js -> runtime only
full(production) -> vue.min.js
runtime-only(production) -> vue.runtime.min.js

# الشروط

full -> contain compiler and runtime.
compiler -> compile js, render functions.
runtime -> crateing vue instances, rendering patching virtual dom.
umd -> umd builds can be used directly by cdn.
commonjs -> مخصصة للاستخدام مع الحزم القديمة مثل الويب باك والبراوسريفاي، مجمعة في pkg.main
EsModule -> starting in 2.6, provides two ES Modules build, مخصصة للاستيراد المباشر في المتصفحات الحديثة عبر <script type = "module">.


# Runtime + Compiler vs. Runtime-only

// this requires the compiler
new Vue({
  template: '<div>{{ hi }}</div>'
})

// this does not
new Vue({
  render (h) {
    return h('div', this.hi)
  }
})



# ملاحظة مهمة

عند استخدام
vue-loader 
أو 
vueify
يتم تجميع القوالب داخل ملفات vue.*
. لا تحتاج حقًا إلى برنامج التحويل البرمجي في الحزمة النهائية ، وبالتالي يمكنك استخدام إصدار وقت التشغيل فقط
ظرًا لأن الإنشاءات التي يتم تشغيلها فقط هي أقل وزنًا بنسبة 30٪ تقريبًا من نظيراتها في البنية الكاملة ، فيجب عليك استخدامه كلما استطعت. إذا كنت لا تزال ترغب في استخدام البنية الكاملة بدلاً من ذلك ، فأنت بحاجة إلى تكوين اسم مستعار في المجمّع الخاص بك


# Webpack

module.exports = {
  // ...
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
    }
  }
}


# Rollup

const alias = require('rollup-plugin-alias')

rollup({
  // ...
  plugins: [
    alias({
      'vue': require.resolve('vue/dist/vue.esm.js')
    })
  ]
})

# Browserify

Add to your project’s package.json:

{
  // ...
  "browser": {
    "vue": "vue/dist/vue.common.js"
  }
}

# Parcel

Add to your project’s package.json:

{
  // ...
  "alias": {
    "vue" : "./node_modules/vue/dist/vue.common.js"
  }
}


# ملاحظة


تكون أوضاع التطوير / الإنتاج ثابتة الترميز لبنية UMD: الملفات غير المصغّرة مخصصة للتطوير ، والملفات المصغّرة مخصصة للإنتاج.

تصميمات CommonJS و ES Module مخصصة للحزم ، لذلك نحن لا نوفر إصدارات مصغرة لهم. ستكون مسؤولاً عن تصغير الحزمة النهائية بنفسك.

تبني CommonJS و ES Module أيضًا الحفاظ على عمليات الفحص الأولية للعمليات. .NODE_ENV مع القيم الحرفية للسلسلة كما يسمح المصغرات مثل UglifyJS لإسقاط كتل التعليمات البرمجية للتنمية فقط بالكامل ، مما يقلل من حجم الملف النهائي.


# Webpack+4

module.exports = {
  mode: 'production'
}

# Webpack3

var webpack = require('webpack')

module.exports = {
  // ...
  plugins: [
    // ...
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ]
}

# Rollup
const replace = require('rollup-plugin-replace')

rollup({
  // ...
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
}).then(...)

# Browserify

NODE_ENV=production browserify -g envify -e main.js | uglifyjs -c -m > build.js


# CSP env


بيئات CSP
تفرض بعض البيئات ، مثل Google Chrome Apps ، سياسة أمان المحتوى (CSP) ، التي تحظر استخدام Function () جديد لتقييم التعبيرات. يعتمد الإنشاء الكامل على هذه الميزة في ترجمة القوالب ، لذلك غير قابل للاستخدام في هذه البيئات.

من ناحية أخرى ، فإن بنية التشغيل فقط متوافقة تمامًا مع CSP. عند استخدام وقت التشغيل فقط مع Webpack + vue-loader أو Browserify + vueify ، سيتم تجميع القوالب الخاصة بك في وظائف التجسيد التي تعمل بشكل مثالي في بيئات CSP.


# Dev Build

git clone https://github.com/vuejs/vue.git node_modules/vue
cd node_modules/vue
npm install
npm run build

# Bower

Only UMD builds are available from Bower.

$ bower install vue


# AMD Module Loaders


يمكن استخدام جميع بنيات يو ام دي مباشرة كوحدة نمطية اي ام دي


