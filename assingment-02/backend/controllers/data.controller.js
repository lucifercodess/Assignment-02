import productsData from '../constant/DummyData.json' assert { type: 'json' };


export const getData = async(req,res)=>{
  try {
    res.status(200).json(productsData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error in the get data controller' });
  }
}
