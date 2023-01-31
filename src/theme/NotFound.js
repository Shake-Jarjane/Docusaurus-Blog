import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';
import {PageMetadata} from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import styles from '@site/src/theme/NotFound/styles.module.scss';
// import styles from './styles.module.scss';

export default function NotFound() {
  return (
    <>
      {/* <PageMetadata
        title={translate({
          id: 'theme.NotFound.title',
          message: 'Page Not Found',
        })}
      /> */}
      <Layout>
        {/* <main className="container margin-vert--xl"> */}
          {/* <div className="row">
            <div className="col col--6 col--offset-3">
              <h1 className="hero__title">
                <Translate
                  id="theme.NotFound.title"
                  description="The title of the 404 page">
                  Page Not Found
                </Translate>
              </h1>
              <p>
                <Translate
                  id="theme.NotFound.p1"
                  description="The first paragraph of the 404 page">
                  We could not find what you were looking for.
                </Translate>
              </p>
              <p>
                <Translate
                  id="theme.NotFound.p2"
                  description="The 2nd paragraph of the 404 page">
                  Please contact the owner of the site that linked you to the
                  original URL and let them know their link is broken.
                </Translate>
              </p>
            </div>
          </div> */}

          <div class={styles['not-found']}>
            <div class={styles['sky-bg']}></div>
              <div class={styles['wave-7']}></div>
                <div class={styles['wave-6']}></div>
                  <a class={styles['wave-island']} href="javascript:history.go(-1);">
                    <img src="http://res.cloudinary.com/andrewhani/image/upload/v1524501929/404/island.svg" alt="Island"></img>
                  </a>
                  <div class={styles['"wave-5']}></div>
                  <div class={styles['wave-lost']}>
                    <span>4</span>
                    <span>0</span>
                    <span>4</span>
                  </div>
                  <div class={styles['wave-4']}></div>
                  <div class={styles['wave-boat']}>
                      <img class={styles['boat']} src="http://res.cloudinary.com/andrewhani/image/upload/v1524501894/404/boat.svg" alt="Boat"></img>
                  </div>
                  <div class={styles['wave-3']}></div>
                  <div class={styles['wave-2']}></div>
                  <div class={styles['wave-1']}></div>
                  <div class={styles['wave-message']}>
                    <p>Your're lost~ Click on the island to return</p>
                    <p>可能是个Bug, 或者是作者偷懒还没写 🙄</p>
                  </div>
          </div>
        {/* </main> */}
      </Layout>
    </>
  );
}



