function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var styled = _interopDefault(require('styled-components'));
var colorProcessingLibrary = require('color-processing-library');

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n    width: 100%;\n    background-color:", ";\n    border: 1px solid ", ";\n    transition: background-color .5s, color .5s;\n    color:", ";\n    font-weight: bold;\n    padding: .375rem .75rem;\n    border-radius: ", "px;\n    box-shadow: ", "px ", "px ", "px 0 ", ",\n          -", "px -", "px ", "px 0 ", ";\n    :hover {\n        background-color: ", ";\n        border: 1px solid ", ";\n        transition: border-color .5s, color .5s;\n        color: ", ";\n    }\n    :active {\n        border: 1px solid ", ";\n        box-shadow: inset ", "px ", "px ", "px 0 ", ",\n                    inset -", "px -", "px ", "px 0 ", ";\n        background-color: ", ";\n        color: ", ";\n    }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ComponentShadows = /*#__PURE__*/function () {
  function ComponentShadows(backgroundColor, sameColorShadow, shadowColorBase, darkShadowFactor, lightShadowFactor) {
    this.backgroundColor = backgroundColor;
    this.sameColorShadow = sameColorShadow;
    this.shadowColorBase = shadowColorBase;
    this.darkShadowFactor = darkShadowFactor || 85;
    this.lightShadowFactor = lightShadowFactor || 105;
  }

  var _proto = ComponentShadows.prototype;

  _proto.getShadows = function getShadows() {
    var _hexToRGB = colorProcessingLibrary.hexToRGB(this.backgroundColor),
        Red = _hexToRGB.Red,
        Green = _hexToRGB.Green,
        Blue = _hexToRGB.Blue;

    var mainColorShadows = {
      dark: colorProcessingLibrary.getTintsAndShades(Red, Green, Blue, this.darkShadowFactor),
      light: colorProcessingLibrary.getTintsAndShades(Red, Green, Blue, this.lightShadowFactor)
    };

    if (this.sameColorShadow) {
      return mainColorShadows;
    } else if (this.shadowColorBase !== undefined) {
        var _hexToRGB2 = colorProcessingLibrary.hexToRGB(this.shadowColorBase),
            red = _hexToRGB2.Red,
            green = _hexToRGB2.Green,
            blue = _hexToRGB2.Blue;

        return {
          dark: colorProcessingLibrary.getTintsAndShades(red, green, blue, this.darkShadowFactor),
          light: colorProcessingLibrary.getTintsAndShades(red, green, blue, this.lightShadowFactor)
        };
      } else return {
        dark: colorProcessingLibrary.getTintsAndShades(255, 255, 255, this.darkShadowFactor),
        light: colorProcessingLibrary.getTintsAndShades(255, 255, 255, this.lightShadowFactor)
      };
  };

  return ComponentShadows;
}();

var Button = function Button(_ref) {
  var children = _ref.children,
      style = _ref.style,
      _ref$isSameShadowColo = _ref.isSameShadowColor,
      isSameShadowColor = _ref$isSameShadowColo === void 0 ? false : _ref$isSameShadowColo,
      onClick = _ref.onClick,
      backgroundColor = _ref.backgroundColor,
      shadowColorBase = _ref.shadowColorBase,
      borderRadius = _ref.borderRadius,
      fontColor = _ref.fontColor,
      shadowBlur = _ref.shadowBlur,
      shadowLength = _ref.shadowLength;
  Button.defaultProps = {
    children: 'Button',
    fontColor: "#303030",
    borderRadius: 12,
    onClick: function onClick() {
      return console.log('Soft UI Button is pressed');
    },
    backgroundColor: "#F0F0F0",
    shadowLength: 5,
    shadowBlur: 30
  };
  var componentBaseShadows = new ComponentShadows(backgroundColor, isSameShadowColor, shadowColorBase);

  var _componentBaseShadows = componentBaseShadows.getShadows(),
      dark = _componentBaseShadows.dark,
      light = _componentBaseShadows.light;

  var componentMainColorShadows = new ComponentShadows(backgroundColor, true);

  var _componentMainColorSh = componentMainColorShadows.getShadows(),
      mainDark = _componentMainColorSh.dark,
      mainLight = _componentMainColorSh.light;

  return /*#__PURE__*/React.createElement(StyledButton, {
    backgroundColor: backgroundColor,
    lightShadow: light,
    mainColorLightShadow: mainLight,
    darkShadow: dark,
    mainColorDarkShadow: mainDark,
    color: fontColor,
    radius: borderRadius,
    shadowLength: shadowLength,
    Blur: shadowBlur,
    style: _extends({}, style),
    onClick: onClick
  }, children);
};
var StyledButton = styled.button(_templateObject(), function (props) {
  return props.backgroundColor;
}, function (props) {
  return props.backgroundColor;
}, function (props) {
  return props.color;
}, function (props) {
  return props.radius;
}, function (props) {
  return props.shadowLength;
}, function (props) {
  return props.shadowLength;
}, function (props) {
  return props.Blur;
}, function (props) {
  return props.darkShadow;
}, function (props) {
  return props.shadowLength;
}, function (props) {
  return props.shadowLength;
}, function (props) {
  return props.Blur;
}, function (props) {
  return props.lightShadow;
}, function (props) {
  return props.color;
}, function (props) {
  return props.color;
}, function (props) {
  return props.backgroundColor;
}, function (props) {
  return props.backgroundColor;
}, function (props) {
  return props.shadowLength;
}, function (props) {
  return props.shadowLength;
}, function (props) {
  return props.Blur;
}, function (props) {
  return props.mainColorDarkShadow;
}, function (props) {
  return props.shadowLength;
}, function (props) {
  return props.shadowLength;
}, function (props) {
  return props.Blur;
}, function (props) {
  return props.mainColorLightShadow;
}, function (props) {
  return props.backgroundColor;
}, function (props) {
  return props.color;
});

exports.Button = Button;
//# sourceMappingURL=index.js.map
