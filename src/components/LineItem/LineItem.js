import styles from './LineItem.module.scss';

export default function LineItem({ lineItem, isPaid, handleChangeQty }) {
return (
  <div className={styles.LineItem}>
    <img className={styles.image} src={lineItem.item.image} ></img>
    <div className="flex-ctr-ctr flex-col">
    {/* <span className="align-ctr">{lineItem.category.name}</span> */}
    <div className={styles.details}>
        <div className={styles.type}>{lineItem.item.type}</div>
        <div className={styles.name}>{lineItem.item.name}</div>
      </div>
    </div>
    <div className={styles.qty} style={{ justifyContent: isPaid && 'center' }}>
      {!isPaid &&
        <button
          className="btn-xs"
          onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty - 1)}
        >−</button>
      }
      <span>{lineItem.qty}</span>
      {!isPaid &&
        <button
          className="btn-xs"
          onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty + 1)}
        >+</button>
      }
    </div>
    <div className={styles.extPrice}>${lineItem.extPrice.toFixed(2)}</div>
  </div>
);
}