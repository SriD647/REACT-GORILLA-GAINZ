import React, { useState } from 'react';
import styles from './OrderDetail.module.scss';
import LineItem from '../LineItem/LineItem';

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

    const showStudentQuestion = () => {
        setIsStudentQuestionVisible(true);
    };

    const hideStudentQuestion = () => {
        setIsStudentQuestionVisible(false);
    };

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
                        {/* Student question */}
                        {order.isPaid ? null : (
                            <div className={styles.studentQuestion}>
                                {isStudentQuestionVisible ? (
                                    <div className={styles.mainBox}>
                                        Are you a G.A. student?
                                        <label>
                                            <input type="checkbox" className={styles.checkbox} onClick={hideStudentQuestion} /> Yes
                                        </label>
                                        <label>
                                            <input type="checkbox" className={styles.checkbox} onClick={hideStudentQuestion} /> No
                                        </label>
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
