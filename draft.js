//  const useGetFetchQuery = (name) => {
//   const queryClient = useQueryClient();
//   return queryClient.getQueryData(name);
// };
// const xxx = useGetFetchQuery('repoData')
//   //console.log('wwwwwwwwww',xxx.category_list['categories']);

 
     
  // const cats = useQuery("categories",() => 
  //         axios.get(
  //           'http://143.244.183.12:4200/categories.json'
  //         ).then((res) => res.data)      
  //   );
  //   let arrOfCategories = [{label:'choose One only', value:'choose One only'}] ; 
  //  //const [updateCats, setupdateCats] = useState();

  //  let updateCats;
  //   if(cats.isSuccess){
  //     updateCats = cats.data.category_list['categories'] 
  //     //console.log('5555cats.data.category_list.categories',cats.data.category_list['categories']); 
  //   };
    //console.log([{...arrOfCategories,...updateCats}])
    // const setItemHandler = arrCate.data.category_list['categories'].map((val, index)=>{
    //    //console.log(val.name);
    //    let label,value,newArr; 
    //    newArr = { label:val.slug, value:val.id }
    //    //console.log(newArr);
    //    return (newArr);     
    //    });

  //console.log(cats.status,setItemHandler);

  
     
    //const test = navigation.
   

     //For SubCategories
    // const fetchSubTopics = async () => {
    //     const res = await fetch(`http://143.244.183.12:4200/c/5/${value}.json`);
    //      return res.json();
    //   };
    //  const subCategories = useQuery("SubsTopics", fetchSubTopics);
    // // console.log(response)
    // let arrOFSubs; 
    // if(subCategories.isStale || subCategories.isLoading || subCategories.isRefetching){
    //   arrOFSubs = [];
    // }else{
    //   arrOFSubs = subCategories.data; 
    //   //console.log(arrOFSubs)
    // };
    // const displayedSubs =  SUBCATEGORIES.filter((subItem)=> {
    //   return subItem.category_id == value ;
    // } );



// const setItemHandler = CATEGORIES.map((val, index)=>{
//   //console.log(val.name);
//   let label,value,newArr; 
//   newArr = { label:val.name, value:val.id }
//   //console.log(newArr);
//   return (newArr);     
// }); 

// Deleted New Discussion Part 
// const subsCategoryval = SUBCATEGORIES.filter((subItem)=>{ 
//   return subItem.categoryId.indexOf(value) >= 0 ;  
// });
// const subsCategoryvalItem = subsCategoryval.map((val, index)=>{
//     let label,value,SubsArr; 
//     SubsArr = {label:val.id, value:val.id }; 
//     //console.log(SubsArr); label what is shown not the value 
//     return (SubsArr);   
// });
// const [subsValue, setSubsValues] = useState(null);
// const [subsItems, setSubsItems] = useState(subsCategoryvalItem);
// //console.log('subsCategoryvalItem',subsCategoryvalItem);
// const [firstVisible, setFirstVisible] = useState(false);
// const [firstClose, setFirstClose] = useState(false)

 {/* <DropDownPicker
      zIndex={2000}
      zIndexInverse={2000}
      open={subOpen}
      value={subsValue}
      items={subsCategoryvalItem}
      setOpen={SubOpenHandler}
      onClose={closingSecond}
      setValue={setSubsValues}
      setItems={setSubsItems}
      listMode="MODAL"
      style={{
        backgroundColor: "crimson",
      }}
      labelStyle={{
        fontWeight: "bold"
      }}
      textStyle={{
        fontSize: 15,
        color:'orange'
      }}
      containerStyle={{
             margin:16,
             marginTop:20,
             width:'80%',
             justifyContent:'center',
             alignItems:'center'}}
    /> */}

    // const closingSecond = () =>{ setSubOpen(false)};
    // //for Enable-Disable button,,,the default will show the author name
    // const [anonymous, setAnonymous] = useState(false); 
    // const pressingYa = ()=>{
    //     setAnonymous(true);
    //     //console.log(anonymous)
    // };
    // const SubOpenHandler = ()=>{
    //   setCatOpen(false),
    //   setSubOpen(true)  
    // }; 

    //the anonyoums part 

            {/* For Check Icon Anonoymus */}
             {/* <View style={styles.horz}>
             <AntDesign.Button   
                name="checkcircleo" 
                borderRadius= {40}
                size={18} 
                iconStyle={ {
                justifyContent:'center',
                marginRight:"auto" }}
                style={styles.enableButton}
                onPress={pressingYa}
                backgroundColor='orange'
                />
             {<Text style={styles.sen}>Show my name</Text>}
              </View>  */}

//From CategoryScreen.js 
// const arr = catQu.data.category_list['categories']
  //const arr = data.category_list['categories']; 
  //console.log(arr)
  
  //  if(isSuccess){
  // const arr = data.category_list['categories'];
  //   // console.log(arr)      
  // {arr.map((item, index)=>{return <Text key={index}>{item.name} , {item.id} </Text> })}   
  // }