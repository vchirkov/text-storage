export default ($translateSanitizationProvider, $translateProvider) => {
    $translateSanitizationProvider.useStrategy('sanitize');
    $translateProvider.preferredLanguage('en_US');
}