/**
 * navigate from root component to selection list
 * as soon as selection list is fetched
 *
 * @param $stateProvider
 */
export default ($stateProvider) => {
    $stateProvider
        .state('textStorageRoot.selectionList', {
            component: 'selectionList',
            resolve: {
                selections: ['selections', '$stateParams', (selections, $stateParams) => {
                    return selections.get($stateParams.topic, $stateParams.domain);
                }]
            },
            params: {
                topic: null,
                domain: null
            }
        });
}