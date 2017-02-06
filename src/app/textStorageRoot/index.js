/**
 * Created by vlad.chirkov on 31.1.17.
 */
import angular from 'angular';
import angularTranslate from 'angular-translate';
import angularSanitize from 'angular-sanitize';
import common from '../common';
import selectionList from './selectionList';

import textStorageRootComponent from './textStorageRootComponent'
import router from './config/router';
import translate from './config/translate';

/**
 * root component, that has two filters to apply for list of selections
 * @module textStorageRoot
 * @dependency {module} [angular-translate]
 * @dependency {module} [angular sanitize]
 * @dependency {module} [common] - abstractions to communicate with background
 * @dependency {module} [selectionList] - component module to display selections (will be extended in future to show html)
 *
 * @component {component} - textStorageRootComponent
 *
 * @config {function} - translate configuration
 * @config {function} - router configuration
 *
 */
export default angular.module('textStorageRoot', [angularTranslate, angularSanitize, common, selectionList])

    .component(textStorageRootComponent.$name, textStorageRootComponent)

    .config(router)

    .config(translate)

    .name;