/**
 * Created by vlad.chirkov on 31.1.17.
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularTranslate from 'angular-translate';
import angularSanitize from 'angular-sanitize';

import common from './common';
import textStorageRoot from './textStorageRoot';

import translate from './config/translate';
import router from './config/router';
import './app.less';

/**
 * Core page module
 * @module app
 * @dependency {module} [ui-router]
 * @dependency {module} [angular-translate]
 * @dependency {module} [angular sanitize]
 * @dependency {module} [common] - abstractions to communicate with background
 * @dependency {module} [textStorageRoot] - root component module, that contains business logic
 *
 * @config {function} - translate configuration
 * @config {function} - router configuration
 *
 * @run {function} - navigate to root component
 */
export default angular.module('app', [uiRouter, angularTranslate, angularSanitize, common, textStorageRoot])

    .config(translate)

    .config(router)

    .run(($state) => $state.go('textStorageRoot'))

    .name;