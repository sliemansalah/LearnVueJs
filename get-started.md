# Installing the CLI
    npm i -g @vue/cli
# Creating a Vue project
    vue create real-world-vue

# What is Vue.js?

 a progressive framework for building user interfaces.

 # ملاحظة

 على الرغم من أن Vue لا تستخدم عناصر مخصصة داخليًا ، إلا أنها تتمتع بقدرة تشغيلية كبيرة عندما يتعلق الأمر باستهلاك أو توزيع كعناصر مخصصة. يدعم Vue CLI أيضًا بناء مكونات Vue التي تسجل نفسها كعناصر مخصصة أصلية.

 # lifecycle

 1- beforeCreate
 2- created
 3- beforeMount
 4- mounted
 5- beforeUpdated
 6- updated
 7- beforeDestroy
 8- destroyed


 # Interpolations with directives
 <span>Message: {{ msg }}</span>
  <span v-once>This will never change: {{ msg }}</span>
<p>Using v-html directive: <span v-html="rawHtml"></span></p>

# Attributes

<div v-bind:id="dynamicId"></div>
<div :id="dynamicId"></div>
<button v-bind:disabled="isButtonDisabled">Button</button>
<button :disabled="isButtonDisabled">Button</button>

# Directives

<p v-if="seen">Now you see me</p>

# Arguments

<a v-bind:href="url"> ... </a>
<a :href="url"> ... </a>

Here href is the argument, 
 v-bind directive to bind the element’s 
 href -> attribute

Another example is the v-on directive, which listens to DOM events:
<a v-on:click="doSomething"> ... </a>
<a @click="doSomething"> ... </a>

# Dynamic Arguments

<a v-bind:[attributeName]="url"> ... </a>
<a v-on:[eventName]="doSomething"> ... </a>


# Modifiers

<form v-on:submit.prevent="onSubmit"> ... </form>

# shortend

<!-- full syntax -->
<a v-bind:href="url"> ... </a>

<!-- shorthand -->
<a :href="url"> ... </a>

<!-- shorthand with dynamic argument (2.6.0+) -->
<a :[key]="url"> ... </a>


<!-- full syntax -->
<a v-on:click="doSomething"> ... </a>

<!-- shorthand -->
<a @click="doSomething"> ... </a>

<!-- shorthand with dynamic argument (2.6.0+) -->
<a @[event]="doSomething"> ... </a>


# computed properties 


var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
    // a computed getter
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.message.split('').reverse().join('')
    }
  }
})

# ملاحظة مهمة

الخصائص المحسوبة يتم تخزينها مؤقتًا بناءً على تبعياتها التفاعلية. لن يتم إعادة تقييم خاصية محسوبة إلا عند تغير بعض التبعيات التفاعلية. هذا يعني أنه طالما أن الرسالة لم تتغير ، فإن الوصول المتعدد إلى الخاصية المحسوبة العكسية للرسالة سيعود على الفور النتيجة المحسوبة مسبقًا دون الحاجة إلى تشغيل الوظيفة مرة أخرى.

هذا يعني أيضًا أن الخاصية المحسوبة التالية لن يتم تحديثها أبدًا ، لأن Date.now () ليس تبعية تفاعلية:


# Computed vs Watched Property


توفر Vue طريقة أكثر عمومية لمراقبة تغييرات البيانات والرد عليها في مثيل Vue: خصائص المشاهدة. عندما يكون لديك بعض البيانات التي تحتاج إلى التغيير استنادًا إلى بعض البيانات الأخرى ، فمن المغري الإفراط في مراقبة المشاهدة - خاصةً إذا كنت قادمًا من خلفية AngularJS. ومع ذلك ، غالبًا ما يكون من الأفضل استخدام خاصية محسوبة بدلاً من رد اتصال ساعة حتمية. النظر في هذا المثال:

# Computed Setter

computed: {
  fullName: {
    // getter
    get: function () {
      return this.firstName + ' ' + this.lastName
    },
    // setter
    set: function (newValue) {
      var names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
}


# Watchers


على الرغم من أن الخصائص المحسوبة أكثر ملاءمة في معظم الحالات ، فهناك أوقات تكون فيها المراقبة المخصصة ضرورية. لهذا السبب توفر Vue طريقة أكثر عمومية للرد على تغييرات البيانات من خلال خيار الساعة. هذا مفيد للغاية عندما تريد إجراء عمليات غير متزامنة أو باهظة الثمن استجابةً لتغيير البيانات.


# Class and Style Bindings

data: {
  isActive: true,
},

computed: {
  classObject: function () {
    return {
      active: this.isActive && !this.error,
      'text-danger': this.error && this.error.type === 'fatal'
    }
  }

<div v-bind:class="{ active: isActive }"></div>

# Array Syntax

data: {
  activeClass: 'active',
  errorClass: 'text-danger'
}

<div v-bind:class="[activeClass, errorClass]"></div>

render to => <div class="active text-danger"></div>


# With Components

Vue.component('my-component', {
  template: '<p class="foo bar">Hi</p>'
})

# Binding Inline Styles

<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>

<div v-bind:style="[baseStyles, overridingStyles]"></div>

# Multiple Values
<div v-bind:style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>


# Conditional Rendering
<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>


# Controlling Reusable Elements with key

<template v-if="loginType === 'username'">
  <label>Username</label>
  <input placeholder="Enter your username">
</template>
<template v-else>
  <label>Email</label>
  <input placeholder="Enter your email address">
</template>


# v-if vs v-show



v-if هو تقديم شرطي "حقيقي" لأنه يضمن تدمير مستمعي الأحداث والمكونات الفرعية داخل الكتلة الشرطية بشكل صحيح وإعادة إنشائها أثناء التبديل.

v-if أيضًا كسول: إذا كان الشرط خاطئًا في العرض الأولي ، فلن يفعل شيئًا - لن يتم عرض الكتلة الشرطية حتى يصبح الشرط صحيحًا لأول مرة.

بالمقارنة ، فإن v-show أبسط بكثير - يتم تقديم العنصر دائمًا بصرف النظر عن الحالة الأولية ، مع التبديل القائم على CSS.

وبصفة عامة ، فإن v-if لها تكاليف تبديل أعلى بينما v-show لها تكاليف عرض أولية أعلى. لذا تفضل v-show إذا كنت بحاجة إلى تبديل شيء ما في كثير من الأحيان ، وتفضل v-if إذا كان من غير المرجح أن تتغير الحالة في وقت التشغيل.


# v-for

<div v-for="item in items" v-bind:key="item.id">
  <!-- content -->
</div>

# Mutation Methods
push()
pop()
shift()
unshift()
splice()
sort()
reverse()

# Replacing an Array
example1.items = example1.items.filter(function (item) {
  return item.message.match(/Foo/)
})

# Caveats تحفظات

بسبب القيود في جافاسكريبت هناك أنواع من المتغيرات يتعذر على فيو اكتشافها خلال المصفوفات

# Displaying Filtered/Sorted Results

<li v-for="n in evenNumbers">{{ n }}</li>
data: {
  numbers: [ 1, 2, 3, 4, 5 ]
},
computed: {
  evenNumbers: function () {
    return this.numbers.filter(function (number) {
      return number % 2 === 0
    })
  }
}


<ul v-for="set in sets">
  <li v-for="n in even(set)">{{ n }}</li>
</ul>


data: {
  sets: [[ 1, 2, 3, 4, 5 ], [6, 7, 8, 9, 10]]
},
methods: {
  even: function (numbers) {
    return numbers.filter(function (number) {
      return number % 2 === 0
    })
  }
}


# v-for with a Range
<div>
  <span v-for="n in 10">{{ n }} </span>
</div>

# v-for with v-if

<ul v-if="todos.length">
  <li v-for="todo in todos">
    {{ todo }}
  </li>
</ul>
<p v-else>No todos left!</p>

# v-for with a Component
<my-component v-for="item in items" :key="item.id"></my-component>



# Event Modifiers
.stop -> stop propagation 
.prevent -> prevent default
.capture -> capture mode when adding the event listener
 an event targeting an inner element is handled here before being handled by that element
.self
.once
.passive

<a v-on:click.stop.prevent="doThat"></a> -> chained

<div v-on:scroll.passive="onScroll">...</div>


# ملاحظة

لا تستخدم .passive و .prevent معًا ، لأنه سيتم تجاهل .prevent وربما يعرض لك المتصفح تحذيرًا. تذكر أن .passive يتصل بالمتصفح الذي لا تريد منع السلوك الافتراضي للحدث.


# key-code

enter
.tab
.delete (captures both “Delete” and “Backspace” keys)
.esc
.space
.up
.down
.left
.right

# ملاحظة
المفاتيح تتعارض مع الاكسبلورر 9

# System Modifier Keys

.ctrl
.alt
.shift
.meta -> command key

# .exact Modifier

<!-- this will fire even if Alt or Shift is also pressed -->
<button v-on:click.ctrl="onClick">A</button>

<!-- this will only fire when Ctrl and no other keys are pressed -->
<button v-on:click.ctrl.exact="onCtrlClick">A</button>

<!-- this will only fire when no system modifiers are pressed -->
<button v-on:click.exact="onClick">A</button>

# Mouse Button Modifiers
.left
.right
.middle


# Modifiers

# .lazy
<input v-model.lazy="msg"> 
lazy modifier to instead sync after change

# .number
<input v-model.number="age" type="number">

# .trim
<input v-model.trim="msg">

# v-model


# components 

1- Global Registration
Vue.component('my-component-name', {
  // ... options ...
})

2- Local Registration

var ComponentA = { /* ... */ }
var ComponentB = { /* ... */ }
var ComponentC = { /* ... */ }

new Vue({
  el: '#app',
  components: {
    'component-a': ComponentA,
    'component-b': ComponentB
  }
})

Or if you’re using ES2015 modules, such as through Babel and Webpack, that might look more like:

import ComponentA from './ComponentA.vue'

export default {
  components: {
    ComponentA
  },
  // ...
}





