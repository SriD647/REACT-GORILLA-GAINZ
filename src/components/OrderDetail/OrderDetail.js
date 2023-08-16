import React, { useState } from 'react';
import styles from './OrderDetail.module.scss';
import LineItem from '../LineItem/LineItem';
import coupons from '../../utilities/coupons';


export default function OrderDetail({ order, handleChangeQty, handleCheckout }) {
    if (!order) return null;

    const lineItems = order.lineItems.map(item =>
        <LineItem
            lineItem={item}
            isPaid={order.isPaid}
            handleChangeQty={handleChangeQty}
            key={item._id}
        />
    );

    const [isStudentQuestionVisible, setIsStudentQuestionVisible] = useState(false);
    const [isInputFormVisible, setIsInputFormVisible] = useState(false); // Add this state
    const [text, setText] = useState("");

    const showForm = () => {
        setIsInputFormVisible(true); // Show the input form when user clicks "Yes"
    }

    const showStudentQuestion = () => {
        setIsStudentQuestionVisible(true);        
    };

    const hideStudentQuestion = () => {
        setIsStudentQuestionVisible(false);
        setIsInputFormVisible(false); // Hide the input form when user clicks "No"
    };

    const handleChange = (e) => {
        setText(e.target.value);
      };
    

    const changeTotal = (e) => {
        e.preventDefault();
        
        const coupon = coupons.find((item) => {
            return item.name.toLowerCase().trim() === text.toLowerCase().trim()
        })
        // need to make an api call that will do that update, make controller in utilities, update cart

        hideStudentQuestion();
    }

    return (
        <div className={styles.OrderDetail}>
            <div className={styles.sectionHeading}>
                {order.isPaid ?
                    <span>ORDER <span className="smaller">{order.orderId}</span></span>
                    :
                    <span>NEW ORDER</span>
                }
                <span> {new Date(order.updatedAt).toLocaleDateString()}</span>
            </div>
            <div className={`${styles.lineItemContainer} flex-ctr-ctr flex-col scroll-y`}>
                {lineItems.length ?
                    <>
                        {lineItems}
                        <section className={styles.total}>
                            {order.isPaid ?
                                <span className={styles.right}>TOTAL&nbsp;&nbsp;</span>
                                :
                                <button
                                    className="btn-sm"
                                    onClick={handleCheckout}
                                    disabled={!lineItems.length}
                                >CHECKOUT</button>
                            }
                            <span className={styles.totalQ}>{order.totalQty}</span>
                            <span className={styles.right}>${order.orderTotal.toFixed(2)}</span>
                        </section>
                        {order.isPaid ? null : (
                            <div className={styles.studentQuestion}>
                                {isStudentQuestionVisible ? (
                                    <div className={styles.mainBox}>
                                        Are you a G.A. student?
                                        <label>
                                            <input type="checkbox" className={styles.checkbox} onClick={showForm} /> Yes
                                        </label>
                                        <label>
                                            <input type="checkbox" className={styles.checkbox} onClick={hideStudentQuestion} /> No
                                        </label>
                                        {isInputFormVisible && (
                                           <div>
                                           <form onSubmit={changeTotal}><br/>
                                             <input
                                               className={styles.input}
                                               type="text"
                                               name="text"
                                               placeholder="Insert coupon code.."
                                               value={text}
                                               onChange={handleChange}
                                             />
                                             <button className= {styles.submit} type="submit">Submit</button>
                                           </form>
                                         </div>
                                        )}
                                    </div>
                                ) : (
                                    <button className={styles.checkButton} onClick={showStudentQuestion}>
                                        Coupon option
                                    </button>
                                )}
                            </div>
                        )}
                    </>
                    :
                    <div className={styles.hungry}>Let the gainz begin</div>
                }
            </div>
        </div>
    );
}
