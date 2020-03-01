/* Use loading routes lazily */
const learnVueJs = resolve => {
  require.ensure(
    ["./components/learnVueJs.vue"],
    () => {
      resolve(require("./components/learnVueJs.vue"));
    },
    "proj"
  );
};
const gettingStarted = resolve => {
  require.ensure(
    ["./components/gettingStarted.vue"],
    () => {
      resolve(require("./components/gettingStarted.vue"));
    },
    "proj"
  );
};
const vueCliIndex = resolve => {
  require.ensure(
    ["./components/vue-cli/index.vue"],
    () => {
      resolve(require("./components/vue-cli/index.vue"));
    },
    "proj"
  );
};
const comps = resolve => {
  require.ensure(
    ["./components/comps/index.vue"],
    () => {
      resolve(require("./components/comps/index.vue"));
    },
    "proj"
  );
};

const notFound = resolve => {
  require.ensure(
    ["./components/notFound.vue"],
    () => {
      resolve(require("./components/notFound.vue"));
    },
    "notFound"
  );
};
const gettingStartedFirstApp = resolve => {
  require.ensure(
    ["./components/gettingStarted/FirstApp.vue"],
    () => {
      resolve(require("./components/gettingStarted/FirstApp.vue"));
    },
    "gettingStarted"
  );
};
const gettingStartedSetupLocally = resolve => {
  require.ensure(
    ["./components/gettingStarted/SetupLocally.vue"],
    () => {
      resolve(require("./components/gettingStarted/SetupLocally.vue"));
    },
    "gettingStarted"
  );
};
const gettingStartedTemplateSyntaxInstance = resolve => {
  require.ensure(
    ["./components/gettingStarted/TemplateSyntaxInstance.vue"],
    () => {
      resolve(
        require("./components/gettingStarted/TemplateSyntaxInstance.vue")
      );
    },
    "gettingStarted"
  );
};
const gettingStartedAccessingData = resolve => {
  require.ensure(
    ["./components/gettingStarted/AccessingData.vue"],
    () => {
      resolve(require("./components/gettingStarted/AccessingData.vue"));
    },
    "gettingStarted"
  );
};
const gettingStartedBindingToAttributes = resolve => {
  require.ensure(
    ["./components/gettingStarted/BindingToAttributes.vue"],
    () => {
      resolve(require("./components/gettingStarted/BindingToAttributes.vue"));
    },
    "gettingStarted"
  );
};
const gettingStartedDirectives = resolve => {
  require.ensure(
    ["./components/gettingStarted/Directives.vue"],
    () => {
      resolve(require("./components/gettingStarted/Directives.vue"));
    },
    "gettingStarted"
  );
};
const gettingStartedVonce = resolve => {
  require.ensure(
    ["./components/gettingStarted/Vonce.vue"],
    () => {
      resolve(require("./components/gettingStarted/Vonce.vue"));
    },
    "gettingStarted"
  );
};
const gettingStartedOutputHtml = resolve => {
  require.ensure(
    ["./components/gettingStarted/OutputHtml.vue"],
    () => {
      resolve(require("./components/gettingStarted/OutputHtml.vue"));
    },
    "gettingStarted"
  );
};

const gettingStartedEvents = resolve => {
  require.ensure(
    ["./components/gettingStarted/Events.vue"],
    () => {
      resolve(require("./components/gettingStarted/Events.vue"));
    },
    "gettingStarted"
  );
};

const gettingStartedEventObject = resolve => {
  require.ensure(
    ["./components/gettingStarted/EventObject.vue"],
    () => {
      resolve(require("./components/gettingStarted/EventObject.vue"));
    },
    "gettingStarted"
  );
};

const gettingStartedArgumentsEvents = resolve => {
  require.ensure(
    ["./components/gettingStarted/ArgumentsEvents.vue"],
    () => {
      resolve(require("./components/gettingStarted/ArgumentsEvents.vue"));
    },
    "gettingStarted"
  );
};
const gettingStartedArgumentsEventModifiers = resolve => {
  require.ensure(
    ["./components/gettingStarted/EventModifiers.vue"],
    () => {
      resolve(require("./components/gettingStarted/EventModifiers.vue"));
    },
    "gettingStarted"
  );
};

export const routes = [
  {
    path: "",
    component: learnVueJs,
    name: "learnVueJs"
  },
  {
    path: "/getting-started",
    component: gettingStarted,
    name: "gettingStarted"
  },
  {
    path: "/getting-started/first-app",
    component: gettingStartedFirstApp,
    name: "gettingStartedFirstApp"
  },
  {
    path: "/getting-started/setup-locally",
    component: gettingStartedSetupLocally,
    name: "gettingStartedSetupLocally"
  },
  {
    path: "/getting-started/template-syntax-instance",
    component: gettingStartedTemplateSyntaxInstance,
    name: "gettingStartedTemplateSyntaxInstance"
  },
  {
    path: "/getting-started/accessing-data",
    component: gettingStartedAccessingData,
    name: "gettingStartedAccessingData"
  },
  {
    path: "/getting-started/binding-to-attributes",
    component: gettingStartedBindingToAttributes,
    name: "gettingStartedBindingToAttributes"
  },
  {
    path: "/getting-started/directives",
    component: gettingStartedDirectives,
    name: "gettingStartedDirectives"
  },
  {
    path: "/getting-started/v-once",
    component: gettingStartedVonce,
    name: "gettingStartedVonce"
  },
  {
    path: "/getting-started/output-html",
    component: gettingStartedOutputHtml,
    name: "gettingStartedOutputHtml"
  },
  {
    path: "/getting-started/events",
    component: gettingStartedEvents,
    name: "gettingStartedEvents"
  },
  {
    path: "/getting-started/event-object",
    component: gettingStartedEventObject,
    name: "gettingStartedEventObject"
  },
  {
    path: "/getting-started/arguments-events",
    component: gettingStartedArgumentsEvents,
    name: "gettingStartedArgumentsEvents"
  },
  {
    path: "/getting-started/event-modifiers",
    component: gettingStartedArgumentsEventModifiers,
    name: "gettingStartedArgumentsEventModifiers"
  },
  {
    path: "/vue-cli",
    component: vueCliIndex,
    name: "vueCliIndex"
  },
  {
    path: "/components",
    component: comps,
    name: "comps"
  },
  {
    path: "/not-found",
    component: notFound,
    name: "notFound"
  },
    // { path: "*", redirect: "/not-found" }
];
