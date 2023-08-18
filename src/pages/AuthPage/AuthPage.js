
import { useState } from 'react';
import styles from './AuthPage.module.scss';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import Logo from '../../components/Logo/Logo';

export default function AuthPage({ setUser }) {
  return (
    <main className={styles.AuthPage}>
      <div className={styles.authContainer}>
        <Logo className={styles.logo}/>
        <div className={styles.formsContainer}>
          <LoginForm setUser={setUser} />
          <SignUpForm setUser={setUser} />
        </div>
        <h2 className={styles.discount}> ***30% discount for G.A students! Enter coupon code: GAfamily</h2>
      </div>      
    </main>
  );
}