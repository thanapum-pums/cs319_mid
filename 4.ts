class Database<T> {
    private entries: T[]= [];
    
    addEntry(entry:T):void{
        this.entries.push(entry);
    }

    getEntries() : T[]{
        return this.entries
    }
}