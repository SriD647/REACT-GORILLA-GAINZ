import styles from './MenuListItem.module.scss';

export default function MenuListItem({ menuItem, handleAddToOrder }) {
  return (
    <div className={styles.MenuListItem}>
      <img className={styles.image} src={menuItem.image} alt={menuItem.name} />
      <div className={styles.details}>
        <div className={styles.type}>{menuItem.type}</div>
        <div className={styles.name}>{menuItem.name}</div>
        <div className={styles.manufacturer}>
          Manufacturer:{" "}
          <a
            href={menuItem.website}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            {menuItem.manufacturer}
          </a>
        </div>
      </div>
      <div className={styles.buy}>
        <span>${menuItem.price.toFixed(2)}</span>
        <button className="btn-sm" onClick={() => handleAddToOrder(menuItem._id)}>
          ADD
        </button>
      </div>
    </div>
  );
}
