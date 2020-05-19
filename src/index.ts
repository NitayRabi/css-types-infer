import stylesheet from './example.css';
import stylesheet2 from './example.st.css';

interface SelectorMetadata {
    someTranslationKey?: string;
}

// using a function allows to infer T from the stylesheet
function createSelectorMetadata<T extends Record<string, string>>(data: {stylesheet: T, selectors: {[key in keyof T]: SelectorMetadata}}) {
    return data;
}

// bar & foo are selectors
const works = createSelectorMetadata({stylesheet, selectors: {
    foo: {},
    bar: {}
}})

// baz is not a selector
const wontCompile = createSelectorMetadata({stylesheet, selectors: {
    foo: {},
    baz: {}
}})


// bar & foo are selectors
const works2 = createSelectorMetadata({stylesheet: stylesheet2, selectors: {
    foo: {},
    bar: {}
}})

// baz is not a selector
const wontCompile2 = createSelectorMetadata({stylesheet: stylesheet2, selectors: {
    foo: {},
    baz: {}
}})