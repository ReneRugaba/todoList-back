import { Cathegory, List, PrismaClient } from "@prisma/client";


export default class TodoService {
    private prismaClient: PrismaClient

    constructor(){
        this.prismaClient= new PrismaClient()
    }

    findAll =async()=> await this.prismaClient.list.findMany()

    createList=async(list:List)=> await this.prismaClient.list.create({data:list})

    creatCathegory=()=>{
        let cathegoryArray=["Legumes","Fruits","Viandes","Bonbons","Patisseries"]

        cathegoryArray.map(async(item)=>{
           let cath= {name:item} as Cathegory
            await this.prismaClient.cathegory.create({data:cath})
        })
    }
}