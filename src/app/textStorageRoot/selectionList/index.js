/**
 * Created by vlad.chirkov on 31.1.17.
 */
import angular from 'angular';
import angularTranslate from 'angular-translate';
import angularSanitize from 'angular-sanitize';
import common from '../../common';

import selectionListComponent from './selectionListComponent'
import translate from './config/translate';

/**
 * component, to display selections. For now handles only  text, but later will display html
 * @module selectionList
 * @dependency {module} [angular-translate]
 * @dependency {module} [angular sanitize]
 * @dependency {module} [common] - abstractions to communicate with background
 *
 * @component {component} - selectionListComponent
 *
 * @config {function} - translate configuration
 *
 */
export default angular.module('selectionList', [angularTranslate, angularSanitize, common])

    .component(selectionListComponent.$name, selectionListComponent)

    .config(translate)

    .name;