type ObjectLike = {[key: string]: any};
export default class {
    /**
     * target 의 프로퍼티와 겹치는 source 프로퍼티를 주입한다.
     * 이때 value 는 source 을 따른다.
     * https://stackoverflow.com/a/49292614
     */
    static projection = (target: ObjectLike, source: ObjectLike) => {
        return Object
            .keys(source)
            .reduce((result: ObjectLike, key: string) => {
                if (source[key] && target[key]) {
                    result[key] = source[key];
                }
                return result;
            }, {});
    }
}