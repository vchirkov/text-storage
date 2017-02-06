/**
 * set sanitize stratagey
 * set preffered language for app
 * @param $translateSanitizationProvider
 * @param $translateProvider
 */
export default ($translateSanitizationProvider, $translateProvider) => {
    $translateSanitizationProvider.useStrategy('sanitize');
    $translateProvider.preferredLanguage('en_US');
}