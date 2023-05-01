'use strict';

var React = require('react');

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".videoContainer {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n\n.option1-horizontal {\n  position: absolute;\n  height: 100%;\n  bottom: 0;\n  top: 0;\n  left: 0;\n  width: 0;\n}\n.option1-vertical {\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0;\n  height: 0;\n}\n.option1 video {\n  object-fit: cover;\n}\n.option1.full-horizontal {\n  width: 100% !important;\n  transition: all ease-in-out 1s;\n}\n.option1.full-vertical {\n  height: 100% !important;\n  transition: all ease-in-out 1s;\n}\n.option1.close-horizontal {\n  width: 0 !important;\n  transition: all ease-in-out 1s;\n}\n.option1.close-vertical {\n  height: 0 !important;\n  transition: all ease-in-out 1s;\n}\n.option1.open-horizontal {\n  width: 50%;\n  transition: all ease-in-out 1s;\n}\n.option1.open-vertical {\n  height: 50%;\n  transition: all ease-in-out 1s;\n}\n\n.option2-horizontal {\n  position: absolute;\n  bottom: 0;\n  top: 0;\n  right: 0;\n  width: 0;\n  height: 100%;\n}\n.option2-vertical {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 0;\n  width: 100%;\n}\n.option2 video {\n  object-fit: cover;\n}\n.option2.full-horizontal {\n  width: 100% !important;\n  transition: all ease-in-out 1s;\n}\n.option2.full-vertical {\n  height: 100% !important;\n  transition: all ease-in-out 1s;\n}\n.option2.close-horizontal {\n  width: 0 !important;\n  transition: all ease-in-out 1s;\n}\n.option2.close-vertical {\n  height: 0 !important;\n  transition: all ease-in-out 1s;\n}\n.option2.open-horizontal {\n  width: 50%;\n  transition: all ease-in-out 1s;\n}\n.option2.open-vertical {\n  height: 50%;\n  transition: all ease-in-out 1s;\n}\n\n.text-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.28);\n  z-index: 1;\n  overflow: hidden;\n}\n.text-container.close {\n  background-color: transparent;\n  z-index: -9999;\n  transition: all ease-in-out 1.5s;\n}\n\n.hide {\n  display: none;\n}\n\n.video {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n}\n.video video {\n  object-fit: cover;\n}\n.video.close-horizontal {\n  width: 50% !important;\n  transition: all ease-in-out 1s;\n}\n.video.close-vertical {\n  height: 50% !important;\n  transition: all ease-in-out 1s;\n}\n.video.close.disappear {\n  top: -9999px !important;\n  z-index: -9999;\n}";
styleInject(css_248z);

const Context = React.createContext({
    currentOption: [],
    updateCurrentOption: () => {
    },
});
const QuizProvider = ({ children }) => {
    const [currentOption, setCurrentOption] = React.useState([]);
    const updateCurrentOption = (option) => {
        option && setCurrentOption([...currentOption, option]);
    };
    return (React.createElement(Context.Provider, { value: { updateCurrentOption, currentOption } }, children));
};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var classnames = {exports: {}};

/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

(function (module) {
	/* global define */

	(function () {

		var hasOwn = {}.hasOwnProperty;

		function classNames() {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					if (arg.length) {
						var inner = classNames.apply(null, arg);
						if (inner) {
							classes.push(inner);
						}
					}
				} else if (argType === 'object') {
					if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
						classes.push(arg.toString());
						continue;
					}

					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (module.exports) {
			classNames.default = classNames;
			module.exports = classNames;
		} else {
			window.classNames = classNames;
		}
	}()); 
} (classnames));

var classnamesExports = classnames.exports;
var classNames = /*@__PURE__*/getDefaultExportFromCjs(classnamesExports);

const VideoComponent = ({ questionary, config }) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    const context = React.useContext(Context);
    const ref = React.useRef(null);
    const { onFinish, textContainerClassName, textContainerStyle, videoClassName, videoStyle, orientation } = config;
    const [isFinished, setFinished] = React.useState(false);
    const [disappear, setDisappear] = React.useState(false);
    const [play, setPlay] = React.useState(false);
    const optionSelected = context.currentOption.find(item => item === (questionary === null || questionary === void 0 ? void 0 : questionary.id));
    const option1Selected = optionSelected && ((_a = context.currentOption) === null || _a === void 0 ? void 0 : _a.find(item => { var _a, _b; return item === ((_b = (_a = questionary === null || questionary === void 0 ? void 0 : questionary.questions) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.id); }));
    const option2Selected = optionSelected && ((_b = context.currentOption) === null || _b === void 0 ? void 0 : _b.find(item => { var _a, _b; return item === ((_b = (_a = questionary === null || questionary === void 0 ? void 0 : questionary.questions) === null || _a === void 0 ? void 0 : _a[1]) === null || _b === void 0 ? void 0 : _b.id); }));
    const selectedOnly1 = option1Selected && !option2Selected;
    const selectedOnly2 = !option1Selected && option2Selected;
    const isLeaf = !((questionary === null || questionary === void 0 ? void 0 : questionary.questions) && ((_c = questionary === null || questionary === void 0 ? void 0 : questionary.questions) === null || _c === void 0 ? void 0 : _c.length) > 0);
    React.useEffect(() => {
        const timer = setTimeout(() => isFinished && setDisappear(true), 1000);
        return () => clearTimeout(timer);
    }, [isFinished]);
    React.useEffect(() => {
        if (!play && context.currentOption.find(item => item === (questionary === null || questionary === void 0 ? void 0 : questionary.id))) {
            setPlay(true);
            setTimeout(() => {
                //@ts-ignore
                ref.current.play();
                //@ts-ignore
                ref.current.muted = false;
            }, 1000);
        }
    }, [ref, context.currentOption]);
    return (React.createElement("div", { className: classNames('videoContainer') },
        (questionary === null || questionary === void 0 ? void 0 : questionary.questions) && ((_d = questionary === null || questionary === void 0 ? void 0 : questionary.questions) === null || _d === void 0 ? void 0 : _d.length) > 0 &&
            React.createElement("div", { className: classNames(`option1 option1-${orientation}`, {
                    [`open-${orientation}`]: isFinished,
                    [`full-${orientation}`]: selectedOnly1,
                    [`close-${orientation}`]: selectedOnly2
                }) },
                React.createElement("div", { className: classNames('text-container', {
                        'close': option1Selected,
                        [`${textContainerClassName}`]: !!textContainerClassName
                    }), style: textContainerStyle, onClick: () => {
                        var _a, _b;
                        context.updateCurrentOption((_b = (_a = questionary === null || questionary === void 0 ? void 0 : questionary.questions) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.id);
                    } },
                    React.createElement("h3", { style: { color: 'white' } }, (_e = questionary === null || questionary === void 0 ? void 0 : questionary.questions) === null || _e === void 0 ? void 0 : _e[0].text)),
                ((_f = questionary === null || questionary === void 0 ? void 0 : questionary.questions) === null || _f === void 0 ? void 0 : _f.length) > 0 && React.createElement(VideoComponent, { questionary: (_g = questionary === null || questionary === void 0 ? void 0 : questionary.questions) === null || _g === void 0 ? void 0 : _g[0], config: config })),
        React.createElement("div", { className: classNames('video', {
                'close': isFinished && !isLeaf,
                [`close-${orientation}`]: isFinished && !isLeaf,
                'disappear': disappear && !isLeaf,
                [`${videoClassName}`]: !!videoClassName
            }) },
            React.createElement("video", { onEnded: () => {
                    if (isLeaf) {
                        onFinish && onFinish();
                    }
                    else {
                        setFinished(true);
                    }
                }, style: videoStyle, preload: "auto", muted: true, ref: ref, width: '100%', height: '100%', src: questionary === null || questionary === void 0 ? void 0 : questionary.video })),
        (questionary === null || questionary === void 0 ? void 0 : questionary.questions) && ((_h = questionary === null || questionary === void 0 ? void 0 : questionary.questions) === null || _h === void 0 ? void 0 : _h.length) > 0 &&
            React.createElement("div", { className: classNames(`option2 option2-${orientation}`, {
                    [`open-${orientation}`]: isFinished,
                    [`full-${orientation}`]: selectedOnly2,
                    [`close-${orientation}`]: selectedOnly1
                }) },
                React.createElement("div", { className: classNames('text-container', {
                        'close': option2Selected,
                        [`${textContainerClassName}`]: !!textContainerClassName
                    }), style: textContainerStyle, onClick: () => {
                        var _a, _b;
                        context.updateCurrentOption((_b = (_a = questionary === null || questionary === void 0 ? void 0 : questionary.questions) === null || _a === void 0 ? void 0 : _a[1]) === null || _b === void 0 ? void 0 : _b.id);
                    } },
                    React.createElement("h3", { style: { color: 'white' } }, (_j = questionary === null || questionary === void 0 ? void 0 : questionary.questions) === null || _j === void 0 ? void 0 : _j[1].text)),
                ((_k = questionary === null || questionary === void 0 ? void 0 : questionary.questions) === null || _k === void 0 ? void 0 : _k.length) > 0 && React.createElement(VideoComponent, { questionary: (_l = questionary === null || questionary === void 0 ? void 0 : questionary.questions) === null || _l === void 0 ? void 0 : _l[1], config: config })),
        React.createElement("button", { style: {
                position: 'absolute',
                bottom: 20,
                left: 20,
                backgroundColor: "transparent",
                borderRadius: 12,
                cursor: "pointer",
                color: 'white',
                borderStyle: 'none',
                display: context.currentOption.length === 0 ? 'block' : 'none'
            }, onClick: () => context.updateCurrentOption(1), title: 'Play' },
            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "28", viewBox: "0 0 24 28", fill: "none" },
                React.createElement("path", { d: "M22.9243 12.1368C24.3586 12.9649 24.3586 15.035 22.9243 15.8631L3.56213 27.0419C2.12789 27.8699 0.335093 26.8348 0.335093 25.1787L0.335094 2.82119C0.335094 1.16508 2.12789 0.130005 3.56213 0.958062L22.9243 12.1368Z", fill: "white" })))));
};

const VideoQuiz = ({ questionary, width = '300px', height = '600px', config }) => {
    return (React.createElement(QuizProvider, null,
        React.createElement("div", { style: Object.assign({ width: width, height: height, objectFit: 'cover', overflow: "hidden" }, config === null || config === void 0 ? void 0 : config.containerStyle), className: config === null || config === void 0 ? void 0 : config.containerClassName },
            React.createElement(VideoComponent, { questionary: questionary, config: config }))));
};

exports.VideoQuiz = VideoQuiz;
