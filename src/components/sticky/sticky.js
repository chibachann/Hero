import React from "react";
import * as styles from "./sticky.module.css";

const Sticky = () => {
    return (
        <section className={styles.Section}>
            
            <div className={styles.Box2}>
                <div className={styles.Grid}>
                    <h1 className={styles.Title}>
                        Service
                    </h1>
                    <p>
                        私たちは企業理念として、信頼できるWebサイトを世の中に増やしていくことを心掛けています。
                        お客様がよりWebサイトを手軽に依頼できるよう、低価格、高品質をモットーにWebサイト制作を行っています。
                        価格を超えるデザインとSEO対策を中心とした 運用サポートによってビジネスを加速させるお手伝いをいたします。
                         マーケティングなど各種プロモーションを通して、より付加価値の高いWebサービスを提供していきます。
                         お客様の課題に取り組み、目に見える成果を生み出しています。
                    </p>
                </div>
               
               
               <div className={styles.Container}>
                    <div className={styles.Card}>
                        <img src="/images/kaku01.jpg" alt="icon" />
                        <h2>Webページ制作</h2>
                        <p>
                            お客様のビジネスに合わせたWebページを制作いたします。
                            デザイン、SEO対策などの基本的なサービスから、地域に特化した
                            マーケティング戦略である地域SEO対策まで幅広く対応いたします。
                        </p>
                    </div>
                    <div className={styles.Card}>
                        <img src="/images/kaku01.jpg" alt="icon" />
                        <h2>サブスク型Webページ制作</h2>
                        <p>
                            より手軽にWebページを運用したいお客様に向けたサービスです。
                            月額制でWebページを運用することができ、希望に合わせたカスタマイズも可能です。
                            インターネット上のみでの手続きで完結するため、お客様の負担を軽減いたします。
                            是非一度、ご検討ください。
                        </p>
                    </div>
               </div>
              
            </div>
        </section>
    );
}

export default Sticky;
