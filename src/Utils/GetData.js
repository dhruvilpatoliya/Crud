const GetData = () =>{

    const data = JSON.parse(localStorage.getItem('students'));

    if(data){
        return  data;
    }else{
        return [];
    }


    
}
    export const filterCou = () =>{

        let stude = GetData();
        console.log("stude" , stude);

        let Course = stude.map((stu)=>{
            return stu.course;
        })

        console.log(Course);
        
        let filtercourse = Course.filter((cou , index , cur)=>{

            return cur.indexOf(cou) == index;                                                                                                       

        })
        return filtercourse;

        
        
    }
export default GetData;