const fs = require('fs')
const filePath = 'src\\utils\\generator\\sequence.txt'
class Sequence {
    private currentId: number;
    

    constructor( startId: number = 1) {

        if (fs.existsSync(filePath)) {
            const storedId = fs.readFileSync(filePath, 'utf8');
            this.currentId = parseInt(storedId, 10);
            
        } else {
            this.currentId = startId;
        }
    }

    public nextId(): string {
        const nextId = `testuser${this.currentId++}`;
        fs.writeFileSync(filePath, this.currentId.toString());
        return nextId;
    }
}
export default Sequence;