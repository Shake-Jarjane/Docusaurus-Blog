import React from 'react';

import { useTrail, animated } from '@react-spring/web';
import Translate from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';

import HeroMain from './img/hero_main.svg';

import JuejinIcon from '@site/static/svg/juejin.svg';
import { Icon } from '@iconify/react';

import styles from './styles.module.scss';

import clsx from 'clsx';
import HomepageInfo from '@site/src/components/HomepageInfo';
import DayAndNight from '@site/src/components/DayAndNight';


/* 桌面下滑箭头 */
function ArrowDownBtn(): JSX.Element {
  return (
    <span className={styles.arrowDownBtnWrapper}>
      <svg
        className={styles.arrowDownBtn}
        aria-hidden="true"
        viewBox="-75.52 -43.52 599.04 599.04"
        fill="currentColor"
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight+40,
            behavior: "smooth"
          })
        }}>
        <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
      </svg>
    </span>
  )
}


function Hero() {
  const trails = useTrail(4, {
    // 首页文字过度动作
    from: { opacity: 0, transform: 'translate3d(0px, 5em, 50px)' },
    to: { opacity: 1, transform: 'translate3d(0px, 0px, 0px)' },
    config: {
      mass: 3.5,
      tension: 300,
      friction: 25,
    },
  });

  const {siteConfig} = useDocusaurusContext();
  const { themeConfig } = siteConfig;
  const socials = themeConfig.socials as {
    github: string;
    // twitter: string;
    // juejin: string;
    // csdn: string;
    qq: string;
    wechat: string;
    // cloudmusic: string;
    // zhihu: string;
  };

  return (
    <animated.div className={styles.hero}>
      <div className={styles.bloghome__intro}>
        <animated.div style={trails[0]} className={styles.hero_text}>
          {/* <Translate id="homepage.hero.greet">加减 の </Translate>
          <span className={styles.intro__name}>
            <Translate id="homepage.hero.name">Tiny Home</Translate>
          </span> */}
        </animated.div>
        <animated.p style={trails[1]}>
          {/* <Translate id="homepage.hero.text">
            {`世界继续热闹，愿你不变模样，勇敢且自由 😉`}
          </Translate>
        <br />
        <br /> */}
            {/* {`这里是加减的Blog 😉`}<br /><br /> */}

      <div className={styles['header-content-inner']}>
        <div className={clsx('hero__title', styles['header-title'])}>
          <p>
            {`Shake's Blog`}
          </p>
       </div>
      {/* <div className={styles['header-right']}>
        <div className={clsx('hero__subtitle', styles['header-describe'])}>
          <p>
            <em>{`BLOG`}</em>
          </p>
        </div>
      </div> */}
      </div>

      {/* <div className={styles['typing-demo']}> */}
        <p>{`这里是加减的 Blog 😉`}</p>
      {/* </div> */}
      {/* <p> */}
      
          {/* <Translate
            id="homepage.hero.look"
            values={{
              note: (
                <Link to="/docs/skill">
                  <Translate id="hompage.hero.note">技术笔记</Translate>
                </Link>
              ),
              project: (
                <Link to="/project">
                  <Translate id="hompage.hero.project">实战项目</Translate>
                </Link>
              ),
              link: (
                <Link to="/website">
                  <Translate id="hompage.hero.link">网址导航</Translate>
                </Link>
              ),
              idea: (
                <Link to="/tags/随笔">
                  <Translate id="hompage.hero.idea">想法感悟</Translate>
                </Link>
              ),
            }}
          >
            {`你可以随处逛逛，查看{note}、{project}、{link}、以及我的{idea}。`}
          </Translate> */}
          </animated.p>

          <animated.div style={trails[3]}>
            {/* about me */}
            {/* <a className={styles.intro} href={'./about'}>
              <Translate id="hompage.hero.introduce">About Me</Translate>
            </a> */}
           </animated.div>

            <div>
              {/* <a className="dropdown dropdown--hoverable">
                  <a href={socials.github} target="_blank">
                    <button className={styles.button_social}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M11.999 1C5.926 1 1 5.925 1 12c0 4.86 3.152 8.983 7.523 10.437c.55.102.75-.238.75-.53c0-.26-.009-.952-.014-1.87c-3.06.664-3.706-1.475-3.706-1.475c-.5-1.27-1.221-1.61-1.221-1.61c-.999-.681.075-.668.075-.668c1.105.078 1.685 1.134 1.685 1.134c.981 1.68 2.575 1.195 3.202.914c.1-.71.384-1.195.698-1.47c-2.442-.278-5.01-1.222-5.01-5.437c0-1.2.428-2.183 1.132-2.952c-.114-.278-.491-1.397.108-2.91c0 0 .923-.297 3.025 1.127A10.536 10.536 0 0 1 12 6.32a10.49 10.49 0 0 1 2.754.37c2.1-1.424 3.022-1.128 3.022-1.128c.6 1.514.223 2.633.11 2.911c.705.769 1.13 1.751 1.13 2.952c0 4.226-2.572 5.156-5.022 5.428c.395.34.747 1.01.747 2.037c0 1.47-.014 2.657-.014 3.017c0 .295.199.637.756.53C19.851 20.979 23 16.859 23 12c0-6.075-4.926-11-11.001-11"/></svg>
                      &nbsp;
                      <span>{`Github`}</span>
                    </button>
                  </a>
                </a>&nbsp;&nbsp;&nbsp;

              <a className="dropdown dropdown--hoverable">
                <a href={socials.wechat} target="_blank">
                  <button className={styles.button_social}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                    </svg>
                    &nbsp;
                    <span>{`WeChat`}</span>
                  </button>
                </a><img width="50%" className="dropdown__menu"src='../img/wechat.jpg'/>
              </a>&nbsp;&nbsp;&nbsp;

              <a className="dropdown dropdown--hoverable">
                <a href={socials.qq} target="_blank">
                  <button className={styles.button_social}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                    </svg>
                    &nbsp;
                    <span>{`QQ`}</span>
                    &nbsp;
                  </button>
                </a><img width="50%" className="dropdown__menu"src='../img/qq.jpg'/>
              </a> */}

              {/* <a className="dropdown dropdown--hoverable">
                <a href={socials.github} target="_blank">
                  <button className={styles.button_social2}>
                    <span className={styles.icon}>
                        <svg  width="40" height="40">
                          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                            <path fill="currentColor" fill-rule="evenodd" d="M11.999 1C5.926 1 1 5.925 1 12c0 4.86 3.152 8.983 7.523 10.437c.55.102.75-.238.75-.53c0-.26-.009-.952-.014-1.87c-3.06.664-3.706-1.475-3.706-1.475c-.5-1.27-1.221-1.61-1.221-1.61c-.999-.681.075-.668.075-.668c1.105.078 1.685 1.134 1.685 1.134c.981 1.68 2.575 1.195 3.202.914c.1-.71.384-1.195.698-1.47c-2.442-.278-5.01-1.222-5.01-5.437c0-1.2.428-2.183 1.132-2.952c-.114-.278-.491-1.397.108-2.91c0 0 .923-.297 3.025 1.127A10.536 10.536 0 0 1 12 6.32a10.49 10.49 0 0 1 2.754.37c2.1-1.424 3.022-1.128 3.022-1.128c.6 1.514.223 2.633.11 2.911c.705.769 1.13 1.751 1.13 2.952c0 4.226-2.572 5.156-5.022 5.428c.395.34.747 1.01.747 2.037c0 1.47-.014 2.657-.014 3.017c0 .295.199.637.756.53C19.851 20.979 23 16.859 23 12c0-6.075-4.926-11-11.001-11"/>
                          </svg>
                        </svg>
                      </span>
                    <span className={styles.text}>{`Github`}</span>
                  </button>
                </a>
              </a>&nbsp;&nbsp;&nbsp;

              <a className="dropdown dropdown--hoverable">
                <a href={socials.wechat} target="_blank">
                  <button className={styles.button_social2}>
                    <span className={styles.icon}>
                    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12235" width="30" height="30"><path d="M234.667 320A42.667 42.667 0 1 0 320 320a42.667 42.667 0 1 0-85.333 0zM448 320a42.667 42.667 0 1 0 85.333 0A42.667 42.667 0 1 0 448 320z" p-id="12236" fill="#ffffff">
                      </path><path d="M896 807.68a248.107 248.107 0 0 0 95.36-192c0-133.973-114.133-244.48-261.12-260.907C704 208 558.293 96 384 96 189.867 96 32 234.667 32 405.333A292.053 292.053 0 0 0 147.2 634.24l-28.8 103.893a32 32 0 0 0 46.293 36.48l128-70.613a398.293 398.293 0 0 0 91.734 10.667c10.88 0 21.333 0 32.426-1.494 44.16 96.64 151.68 164.907 277.334 164.907a337.707 337.707 0 0 0 75.52-8.533L874.24 927.36a32 32 0 0 0 46.293-36.48z m-203.307 6.4A241.067 241.067 0 0 1 481.92 701.867l-12.587-29.44-7.68-30.934a170.667 170.667 0 0 1-2.346-26.453c0-103.467 93.44-188.8 213.333-198.187H704a275.2 275.2 0 0 1 31.787 2.987c109.44 16.853 192 98.133 192 195.84a188.587 188.587 0 0 1-85.334 154.027 32 32 0 0 0-12.586 34.773l8.533 30.72-49.067-27.52a32 32 0 0 0-23.893-2.773 272.64 272.64 0 0 1-72.107 9.386zM384 650.667A334.08 334.08 0 0 1 296.32 640a32.213 32.213 0 0 0-23.893 2.987l-71.894 39.68 14.294-51.627a32 32 0 0 0-12.587-34.773A232.747 232.747 0 0 1 96 405.333C96 270.08 225.28 160 384 160c137.813 0 253.227 82.987 281.387 193.28-151.68 12.587-270.72 125.013-270.72 261.76a232.32 232.32 0 0 0 2.986 34.987z" p-id="12237" fill="#ffffff">
                        </path>
                          <path d="M611.627 554.667H608a32 32 0 0 0-32 32 32 32 0 1 0 35.627-32zM746.667 586.667a32 32 0 1 0 64 0 32 32 0 1 0-64 0z" p-id="12238" fill="#ffffff"></path>
                        </svg>
                      </span>
                    <span className={styles.text}>{`Wechat`}</span>
                  </button>
                </a><img width="50%" className="dropdown__menu"src='../img/wechat.jpg'/>
              </a>&nbsp;&nbsp;&nbsp;
              
              <a className="dropdown dropdown--hoverable">
                <a href={socials.qq} target="_blank">
                  <button className={styles.button_social2}>
                    <span className={styles.icon}>
                        <svg  width="30" height="25">
                          <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15300" width="25" height="25">
                            <path d="M943.0016 579.072a1373.696 1373.696 0 0 0-30.8224-82.9952l-30.5152-72.4992 0.0512-8.6528C881.7664 166.7072 733.184 0 512 0S142.2336 166.7072 142.2336 414.8736l0.0512 8.6016-29.9008 71.0656a1355.776 1355.776 0 0 0-31.488 84.6336c-36.5568 111.9232-39.3216 193.3824-8.0896 242.0224 16.896 26.3168 43.3664 43.8272 73.216 48.7424a118.6816 118.6816 0 0 0 13.1072 92.0576c35.4304 56.9856 102.5536 61.2352 200.9088 61.2352 56.7808 0 117.1968-2.9184 151.9104-5.9392 34.7136 3.072 95.0784 5.9392 151.9104 5.9392 98.3552 0 165.4784-4.2496 200.8576-61.1328 15.9232-25.6 21.8112-59.4944 13.1584-92.16a107.776 107.776 0 0 0 73.216-48.7424c31.1808-48.64 28.4672-130.0992-8.0896-242.1248z m-81.7152 189.7984l-0.768 0.0512c-19.8656 0-73.9328-83.6608-73.9328-83.6608 0 49.664-26.88 121.344-84.992 168.1408 21.76 6.4 48.4352 16.1792 65.536 28.2624 15.4112 10.8032 13.4656 21.8112 10.7008 26.3168-5.9904 9.6256-56.9856 12.8-113.92 12.8-58.4192 0-123.136-3.328-151.9104-6.4-28.7744 3.1232-93.4912 6.4-151.9104 6.4-56.9344 0-107.8784-3.1744-113.92-12.8-2.7648-4.4544-4.7104-15.5136 10.7008-26.3168 17.1008-12.032 43.776-21.8624 65.536-28.2624-58.112-46.848-84.992-118.4768-84.992-168.192 0 0-54.1184 83.6608-73.9328 83.6608l-0.768-0.0512c-8.96-1.024-20.6848-47.0016 15.5648-158.0544 7.5776-23.296 17.9712-50.432 28.4672-76.544l38.3488-91.136c0-1.0752-0.512-19.0464-0.512-28.2624C244.6336 259.0208 321.9456 102.4 512 102.4c190.0544 0 267.3664 156.6208 267.3664 312.4736 0 9.2672-0.4608 27.1872-0.512 28.2624l38.4 91.136c10.496 26.112 20.8896 53.248 28.4672 76.544 36.2496 111.0528 24.5248 157.0304 15.5648 158.0544z" fill="#ffffff" p-id="15301"></path>
                          </svg>
                        </svg>
                      </span>
                    <span className={styles.text}>{`QQ`}</span>
                  </button>
                </a><img width="50%" className="dropdown__menu"src='../img/qq.jpg'/>
              </a>&nbsp;&nbsp;&nbsp; */}

              <button className={styles.btn}>
                <span>🥱 💤</span>
                  <div className={styles.container}>
                    <a className="dropdown dropdown--hoverable">
                      <a href={socials.github} target="_blank">
                        <svg height="35" width="35" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" className={styles.icon}>
                          <path fill="" d="M950.930286 512q0 143.433143-83.748571 257.974857t-216.283429 158.573714q-15.433143 2.852571-22.601143-4.022857t-7.168-17.115429l0-120.539429q0-55.442286-29.696-81.115429 32.548571-3.437714 58.587429-10.313143t53.686857-22.308571 46.299429-38.034286 30.281143-59.977143 11.702857-86.016q0-69.12-45.129143-117.686857 21.138286-52.004571-4.534857-116.589714-16.018286-5.12-46.299429 6.290286t-52.589714 25.161143l-21.723429 13.677714q-53.174857-14.848-109.714286-14.848t-109.714286 14.848q-9.142857-6.290286-24.283429-15.433143t-47.689143-22.016-49.152-7.68q-25.161143 64.585143-4.022857 116.589714-45.129143 48.566857-45.129143 117.686857 0 48.566857 11.702857 85.723429t29.988571 59.977143 46.006857 38.253714 53.686857 22.308571 58.587429 10.313143q-22.820571 20.553143-28.013714 58.88-11.995429 5.705143-25.746286 8.557714t-32.548571 2.852571-37.449143-12.288-31.744-35.693714q-10.825143-18.285714-27.721143-29.696t-28.306286-13.677714l-11.410286-1.682286q-11.995429 0-16.603429 2.56t-2.852571 6.582857 5.12 7.972571 7.460571 6.875429l4.022857 2.852571q12.580571 5.705143 24.868571 21.723429t17.993143 29.110857l5.705143 13.165714q7.460571 21.723429 25.161143 35.108571t38.253714 17.115429 39.716571 4.022857 31.744-1.974857l13.165714-2.267429q0 21.723429 0.292571 50.834286t0.292571 30.866286q0 10.313143-7.460571 17.115429t-22.820571 4.022857q-132.534857-44.032-216.283429-158.573714t-83.748571-257.974857q0-119.442286 58.88-220.306286t159.744-159.744 220.306286-58.88 220.306286 58.88 159.744 159.744 58.88 220.306286z"></path>
                        </svg>
                      </a>
                    </a>

                    <a className="dropdown dropdown--hoverable">
                      <a href={socials.wechat} target="_blank">
                        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3484" width="40" height="40" className={styles.icon}>
                          <path d="M341.333333 298.666667a42.666667 42.666667 0 1 1 0 85.333333 42.666667 42.666667 0 0 1 0-85.333333z m426.666667 256a42.666667 42.666667 0 1 1 0 85.333333 42.666667 42.666667 0 0 1 0-85.333333z m-213.333333 0a42.666667 42.666667 0 1 1 0 85.333333 42.666667 42.666667 0 0 1 0-85.333333z m-42.666667-256a42.666667 42.666667 0 1 1 0 85.333333 42.666667 42.666667 0 0 1 0-85.333333z m-107.221333 407.168a416.64 416.64 0 0 1-26.026667-2.432l-132.693333 58.709333a71.68 71.68 0 0 1-81.536-17.578667 74.026667 74.026667 0 0 1-12.074667-82.432l23.722667-48.938666C118.485333 560.341333 85.333333 490.496 85.333333 417.194667 85.333333 255.658667 240.042667 128 426.666667 128c180.608 0 331.306667 119.552 340.864 273.621333 99.754667 34.602667 171.136 116.565333 171.136 214.656 0 57.088-25.173333 111.317333-69.034667 153.088l15.232 30.72a66.218667 66.218667 0 0 1-10.837333 74.666667 65.92 65.92 0 0 1-74.666667 15.829333l-101.674667-44.074666c-128.426667 14.848-246.485333-45.738667-292.906666-140.672zM384 618.026667v-1.706667C384 485.888 510.122667 384 661.333333 384c6.016 0 12.032 0.170667 17.962667 0.469333C659.626667 288.938667 555.093333 213.333333 426.666667 213.333333 283.904 213.333333 170.666667 306.773333 170.666667 417.194667c0 56.021333 30.165333 110.805333 83.712 149.845333a42.666667 42.666667 0 0 1 13.226666 53.077333l-24.149333 49.834667 111.957333-49.493333a42.666667 42.666667 0 0 1 23.893334-3.157334l4.693333 0.725334z m378.112 126.464l29.525333-21.12c39.68-28.330667 61.696-67.456 61.696-107.093334C853.333333 537.514667 768.938667 469.333333 661.333333 469.333333c-107.605333 0-192 68.181333-192 146.944 0 89.984 105.6 162.986667 227.968 144.213334l12.16-1.877334 11.264 4.906667 64.682667 27.989333-23.296-47.018666z" fill="#000000" p-id="3485"></path>
                        </svg>
                      </a><img width="50%" className="dropdown__menu"src='../img/wechat.jpg'/>
                    </a>
                  
                  <a className="dropdown dropdown--hoverable">
                    <a href={socials.qq} target="_blank">
                      <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16717" width="38" height="38" className={styles.icon}>
                        <path d="M725.76 938.652444H298.325333c-56.305778 0-94.008889-36.977778-96.497777-110.890666a14.307556 14.307556 0 0 0-3.896889-9.386667c-100.451556-105.173333-97.735111-230.542222 4.053333-359.196444a13.909333 13.909333 0 0 0 2.986667-8.035556c7.068444-190.634667 116.081778-365.824 307.057777-365.824 190.890667 0 299.904 175.189333 307.015112 365.824a13.710222 13.710222 0 0 0 2.986666 8.035556c101.731556 128.654222 104.433778 254.008889 4.039111 359.210666a14.321778 14.321778 0 0 0-3.911111 9.372445c-2.488889 73.927111-40.192 110.890667-96.455111 110.890666h0.028445zM379.477333 463.587556l53.532445 6.200888c98.730667 8.576 197.404444 1.052444 296.163555-22.471111 6.855111-1.607111 11.662222-8.106667 11.050667-15.118222-12.487111-145.024-95.246222-269.297778-228.209778-269.297778-132.977778 0-215.694222 124.302222-228.195555 269.340445-0.597333 6.997333 4.152889 13.454222 10.979555 15.075555 28.245333 6.755556 56.476444 12.16 84.707556 16.270223h-0.028445z m-30.222222 73.784888a1047.054222 1047.054222 0 0 1-83.342222-17.223111 14.364444 14.364444 0 0 0-14.990222 5.390223c-53.105778 73.187556-62.862222 135.566222-31.032889 193.635555 4.764444 8.675556 16.824889 9.784889 23.253333 2.261333a231.808 231.808 0 0 1 36.423111-34.133333c13.653333-10.311111 39.324444 69.546667 25.130667 83.086222-18.318222 17.422222-30.151111 36.081778-32.355556 51.896889-2.204444 15.872 10.097778 38.798222 25.941334 38.798222H725.76c15.872 0 28.16-22.926222 25.955556-38.798222-2.204444-15.644444-13.781333-34.048-31.687112-51.271111-14.350222-13.767111 12.999111-92.700444 27.377778-81.464889a231.623111 231.623111 0 0 1 33.479111 31.857778c6.428444 7.523556 18.488889 6.499556 23.239111-2.190222 31.886222-58.055111 22.186667-120.419556-30.976-193.607111a14.407111 14.407111 0 0 0-15.118222-5.404445 1008.824889 1008.824889 0 0 1-304.597333 28.814222 14.065778 14.065778 0 0 0-15.004445 13.511112l-2.545777 67.313777a38.769778 38.769778 0 1 1-77.496889-2.915555l2.801778-75.093334a14.122667 14.122667 0 0 0-11.904-14.464z" fill="#000000" p-id="16718"></path>
                      </svg>
                    </a><img width="50%" className="dropdown__menu"src='../img/qq.jpg'/>
                  </a>
                </div>
              </button>

            </div><br/>
              
            <div>
              {/* <HomepageInfo /> */}
              <DayAndNight />
            </div><br/>
            <a /* href="https://github.com/Shake-Jarjane/Docusaurus-Blog/commits/main" */ target="_blank">
              <img src="https://img.shields.io/github/last-commit/Shake-Jarjane/Docusaurus-Blog?color=blue&style=flat-square" />
            </a>
            <br/><br/>

            {/* <SocialLinks style={trails[2]} /> */} {/* 社交图标 */}
          {/* </animated.div> */}
        </div>
        <div className={styles.bloghome__image}>
          <ArrowDownBtn />
          <HeroMain />
        </div>
      </animated.div>
  );
}

export function SocialLinks({ ...prop }) {
  const { siteConfig } = useDocusaurusContext();
  const { themeConfig } = siteConfig;
  const socials = themeConfig.socials as {
    github: string;
    // twitter: string;
    // juejin: string;
    // csdn: string;
    qq: string;
    wechat: string;
    // cloudmusic: string;
    // zhihu: string;
  };

  return (
    <animated.div className={styles.social__links} {...prop}>
      <a href={socials.github} target="_blank">
        <Icon icon='ri:github-line' />
      </a>
      {/* <a href={socials.qq} target="_blank">
        <Icon icon='ri:qq-line' />
      </a> */}
      {/* <a href={socials.wechat} target="_blank">
        <Icon icon='ri:wechat-line' />
      </a> */}
      <a className="dropdown dropdown--hoverable">
        <a href={socials.qq} target="_blank">
          <Icon icon='ri:qq-line'  />
        </a>
        <img
          width="50%"
          className="dropdown__menu"
          src='../img/qq.jpg'//'https://z3.ax1x.com/2021/05/16/g2S51s.jpg'//{useBaseUrl("/img/publicQR.webp")}
        />
      </a>
      <a className="dropdown dropdown--hoverable">
        <a href={socials.wechat} target="_blank">
          <Icon icon='ri:wechat-line'/>
        </a>
        <img
          width="50%"
          className="dropdown__menu"
          src='../img/wechat.jpg'//'https://z3.ax1x.com/2021/05/16/g2S51s.jpg'//{useBaseUrl("/img/publicQR.webp")}
        />
      </a>
    </animated.div>
  );
}

export default Hero;
