export type CallBack<T, U> = (key: T, value: U) => void

export class Dictionary<K, V> {
    private keys: K[] = [];
    private vals: V[] = [];

    set (key: K, val: V) {
        let i = this.keys.indexOf(key);
        if(i < 0) {
            this.keys.push(key);
            this.vals.push(val);
        } else {
            this.vals[i] = val;
        } 
    }
    get (key: K): V | undefined {
        if(this.has(key)) {
            return this.vals[this.keys.indexOf(key)];
        }
        return undefined;
    }
    forEach (callback: CallBack<K, V>) {
        this.keys.forEach((item, i) => {
            const val = this.vals[i];
            callback(item, val);
        })
    }

    has (key: K) {
        return this.keys.includes(key);
    }

    delete(key: K) {
        let i = this.keys.indexOf(key);
        if(i < 0) {
            return;
        } 
        this.keys.splice(i, 1);
        this.vals.splice(i, 1);
    }

    get size () {
        return this.keys.length;
    }

}