import { BeforeInsert, BeforeUpdate, Column, Entity } from 'typeorm';
import { v4 as uuid } from 'uuid';


@Entity()
export class Todo {
    @Column({ nullable: false, unique: true, length: 50 })
    id!: string;


    @Column({ length: 120, nullable: false })
    title!: string;

    @Column({length: 500, nullable: true})
    description: string | undefined;

    @Column({ length: 16, nullable: false, default: "NOTSTARTED" })
    itemStatus!: string;
    lastUpdated: Date | undefined;

    @Column({type: "datetime", default: new Date()})

    @BeforeInsert()
    onInit() {
        //Place a new uuid for our object
    this.id = uuid()
    }
    @BeforeUpdate()
    onItemUpdate()
    {this.lastUpdated = new Date()}
   
    
}




// TodoItem
//---------
// id: String
// title: String
// description: String | undefined
//itemStatus: ItemStatus
// completetionDate: Date 
// latsUpdated: Date



// ItemStatus
//---------
// NOT STARTED, IN_PROGRESS, DONE, ARCHIEVED
//
