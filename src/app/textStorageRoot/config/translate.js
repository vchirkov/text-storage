import locale from '../resources/translations/en_US.json';
/**
 * load current translates
 * @param $translateProvider
 */
export default ($translateProvider) => {
    $translateProvider.translations('en_US', locale);
}
