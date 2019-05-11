export default class {
    /**
     * original 의 프로퍼티와 겹치는 source 프로퍼티를 주입한다.
     * 이때 value 는 original 을 따른다.
     * https://stackoverflow.com/a/49292614
     */
    static projection = (original: any, source: any) => {
        return Object
            .keys(source)
            .reduce((result: any, key: string) => {
                if (source[key] && original[key]) {
                    result[key] = source[key];
                }
                return result;
            }, {});
    }
}