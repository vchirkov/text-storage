/**
 * Created by vlad.chirkov on 31.1.17.
 */
import angular from 'angular';
import angularTranslate from 'angular-translate';
import angularSanitize from 'angular-sanitize';
import common from '../common';

import textStorageRootComponent from './textStorageRootComponent'
import translate from './config/translate';

export default angular.module('textStorageRoot', [angularTranslate, angularSanitize, common])

    .component(textStorageRootComponent.$name, textStorageRootComponent)

    .config(translate)

    .name;