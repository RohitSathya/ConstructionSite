import React, { useState } from 'react';
import './books.css';
import rect from '../images/Rectangle1.png';
import mask from '../images/mask.png';
import pencil from '../images/pencil.png';
import thumbs from '../images/thumbs.png';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import apr from '../images/apr.png'
import rup from '../images/rup.png'
import sp from '../images/sp1.png'

export default function Books({func,contactFormRef }) {
    const nav = useNavigate();
    const [scrollPosition, setScrollPosition] = useState(0); 
    const [scrollPosition2, setScrollPosition2] = useState(0);// Initialize scroll position state

    const cate1 = [
       
    ];
    const cate2=[
      

    ]
    const booksData=[
      {sp:sp,apr:apr,rup:rup,price:'1.3 Cr', name: 'Altezza', color: '#FFF0FF',img:'https://appaswamy.com/assets/admin/uploads/property_thumb/112e411517d19d31c1ab00a14ec2116d.png' },
      {sp:sp,apr:apr,rup:rup,price:'2.5 Cr', name: 'Clover By The River', color: '#FFFFD4',img:'https://appaswamy.com/assets/admin/uploads/property_thumb/1754983cb740f1086b4c874ede6c8af3.webp' },
      {sp:sp,apr:apr,rup:rup,price:'1.8 Cr', name: 'Wingfield', color: '#ECFFFF' ,img:'https://appaswamy.com/assets/admin/uploads/property_thumb/6dd7871fbffb86828d405c2c1673678e.webp'},
      {sp:sp, apr:apr,rup:rup,price:'8 Cr',name: 'Haridra', color: '#F0FFC5' ,img:'https://appaswamy.com/assets/admin/uploads/property_thumb/d1827ab66cf541993d161c9a676985bd.jpg'},
      {sp:sp, apr:apr,rup:rup,price:'6 Cr',name: 'Broadstone', color: '#FFF0FF' ,img:'https://appaswamy.com/assets/admin/uploads/property_thumb/00b5ab8d5c4d363f2125503f076f64c0.jpg'},
      {sp:sp,apr:apr,rup:rup,price:'5.5 Cr', name: 'Azure', color: '#FFF0FF',img:'https://appaswamy.com/assets/admin/uploads/property_thumb/1a003f680ce131188a99753629e05e81.webp' },
      {sp:sp,apr:apr,rup:rup,price:'8.8 Cr', name: 'Mandarina', color: '#FFFFD4',img:'https://appaswamy.com/assets/admin/uploads/property_thumb/ac43199d4aac44eefc402d0e3c43bd2f.jpg' },
      {sp:sp,apr:apr,rup:rup,price:'2.7 Cr', name: 'Bloomingdale', color: '#ECFFFF' ,img:'https://appaswamy.com/assets/admin/uploads/property_thumb/228417fe6ee6d50e2912bad38039839d.jpg'},
      { sp:sp,apr:apr,rup:rup,price:'9.8 Cr',name: 'Greensville', color: '#F0FFC5' ,img:'https://appaswamy.com/assets/admin/uploads/property_thumb/959eccd64099b5248c766f9e5c5fbbae.jpg'},
      { sp:sp,apr:apr,rup:rup,price:'1.4 Cr',name: 'Luz Amor', color: '#FFF0FF' ,img:'https://appaswamy.com/assets/admin/uploads/property_thumb/00c011cf5b8eccd8a16055889e7a1191.jpg'},
      
      

    ]


    function checkauth(e) {
        func(e)
        nav('/buildinginfo')
    }

    // Function to handle moving books to the left
    const scrollLeft = () => {
        if (scrollPosition > 0) {
            setScrollPosition(scrollPosition - 1);
        }
    };

    // Function to handle moving books to the right
    const scrollRight = () => {
        setScrollPosition(Math.min(scrollPosition + 1, cate1.length - 4));
    };
    const scrollLeft2 = () => {
        if (scrollPosition2 > 0) {
            setScrollPosition2(scrollPosition2 - 1);
        }
    };

    // Function to handle moving books to the right
    const scrollRight2 = () => {
        setScrollPosition2(Math.min(scrollPosition2 + 1, cate2.length - 4));
    };
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNo: '',
        message: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log(formData);
       toast.success('Submitted Successfully')
        // Reset form after submission
        setFormData({
          name: '',
          email: '',
          phoneNo: '',
          message: ''
        });

      };

    return (
        <>
            <ToastContainer />
            <h1 className='latest'>Latest Release</h1>

            <div className='container-fluid'>
                <div className='row'>
                    {booksData.map((book, index) => (
                        <div key={index} className='col-md-3 mb-4' onClick={()=>checkauth(book)}>
                            <div className='card shadow'>
                                <img src={book.img} className='card-img-top' alt={book.name} />
                                <div className='card-body' style={{ background: book.color }}>
                                    <h3 className='card-title text-center' onClick={() => checkauth(book)}>
                                        {book.name}
                                    </h3>
                                    <h3 className='card-title text-center' style={{ marginTop: '-10px', color: 'red' }}>
                                        {book.price}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container mt-5" ref={contactFormRef}>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card shadow">
                            <div className="card-body">
                                <h2 className="card-title text-center mb-4">Contact Us</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="form-control"
                                            placeholder="Your Name"
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="form-control"
                                            placeholder="Your Email"
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="phoneNo" className="form-label">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phoneNo"
                                            name="phoneNo"
                                            maxLength="10"
                                            value={formData.phoneNo}
                                            onChange={handleChange}
                                            className="form-control"
                                            placeholder="Your Phone Number"
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="message" className="form-label">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="form-control"
                                            placeholder="Your Message"
                                            rows="4"
                                            required
                                        ></textarea>
                                    </div>
                                    <div className="text-center">
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
