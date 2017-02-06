import parseAsDom from './parsers/parseAsDomWithCss';
import parseAsString from './parsers/parseAsText';
/**
 * for now always return as text, add dom option, when it's ready
 * @returns {Function}
 */
export default function () {
    return parseAsString;
}