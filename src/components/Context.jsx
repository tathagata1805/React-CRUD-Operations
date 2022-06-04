import React, { useState, useEffect, useMemo , useContext } from 'react'

const ContextG = React.createContext();

// USING TWO DUMMY DATA WITH THE REQUIRED FIELDS.

const initData = [
    {
        key: 1,
        name: 'Tathagata Chakraborty' ,
        email: 'testone@gmail.com' ,
        phone: '987456321',
        countryNumber: '91' ,
        country: 'INDIA',
        date: '24-02-1996',
        status: true
    },
    {
        key: 2 ,
        name: 'Shahrukh Khan' ,
        email: 'srkindia@gmail.com' ,
        phone: '853336534',
        countryNumber: '91' ,
        country: 'INDIA',
        date: '22-05-1972',
        status: true
    },
];

// ASSIGINING INITIAL VALUES

const initialValues = {
    name : '' ,
    email : '' ,
    country : null ,
    phone : '' ,
    date : null ,
    status : true , 
    countryNumber : '91' ,
};

// ASSIGINING DEFAULT COUNTRY NUMBERS AND NAMES

const countryNumber = [
    { value : '91' , name : '+91' } ,
    { value : '92' , name : '+92' } ,
    { value : '94' , name : '+94' } ,
];

const country = [
    { value : 'INDIA' ,      name : 'INDIA'} ,
    { value : 'PAKISTAN' ,  name : 'PAKISTAN' } ,
    { value : 'TURKEY' ,     name : 'TURKEY' } 
];

// DECLARING STATES

export function MyContext(props) {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedItem ,setSelectedItem] = useState(0);
    const [user , setUser] = useState([]);
    const [selectedModal , setSelectedModal] = useState(0);

    const selectModal = (modal) => setSelectedModal(modal);
    const showModal = () =>  setIsModalVisible(true);
    const closeModal = () =>   setIsModalVisible(false);
    
    useEffect(() => {
        setUser(initData);
    },[])

    const value = useMemo(() => {

        return (
            {   
                showModal , 
                closeModal , 
                isModalVisible  ,
                user ,
                selectedModal ,
                selectModal , 
                country ,
                setUser , 
                countryNumber ,
                initialValues ,
                selectedItem ,
                setSelectedItem
            }
        );
    },[
        isModalVisible , 
        user , 
        selectedModal ,
        selectedItem  , 
        setSelectedItem
    ]);

  return <ContextG.Provider value={value} {...props} />

}

// ERROR HANDLING... 

export function Context() {
    const context = useContext(ContextG);
    if (!context) 
        throw new Error('Error detected! Please check and try again')
    return context;
};
