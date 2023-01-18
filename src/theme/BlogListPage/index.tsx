import clsx from 'clsx';
import React from 'react';

import Link from '@docusaurus/Link';
import Image from '@theme/IdealImage';
import {
  HtmlClassNameProvider, PageMetadata, ThemeClassNames
} from '@docusaurus/theme-common';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import BackToTopButton from '@theme/BackToTopButton';
import type { Props } from '@theme/BlogListPage';
import BlogListPaginator from '@theme/BlogListPaginator';
import type { Props as BlogPostItemsProps } from '@theme/BlogPostItems';
import BlogPostItems from '@theme/BlogPostItems';
import Layout from '@theme/Layout';
import SearchMetadata from '@theme/SearchMetadata';

import useGlobalData from '@docusaurus/useGlobalData';
import BlogInfo from '@site/src/components/BlogInfo';
import Hero from '@site/src/components/Hero';
import { BlogPost } from '@site/src/plugin/plugin-content-blog/src/types';
import { useViewType } from './useViewType';
import Translate from '@docusaurus/Translate';
import { Icon } from '@iconify/react';
import { Fade } from "react-awesome-reveal";


function BlogListPageMetadata(props: Props): JSX.Element {
  const { metadata } = props;
  const {
    siteConfig: { title: siteTitle },
  } = useDocusaurusContext();
  const { blogDescription, blogTitle, permalink } = metadata;
  const isBlogOnlyMode = !permalink.includes('page');
  const title = isBlogOnlyMode ? '' : blogTitle;

  return (
    <>
      <PageMetadata title={title} description={blogDescription} />
      <SearchMetadata tag="blog_posts_list" />
    </>
  );
}

/* 切换视图的按钮 */
function ViewTypeSwitch({ viewType, toggleViewType }: any): JSX.Element {
  return (
    <div className="bloghome__swith-view">
      <Icon icon='ph:list-fill' width="50" height="30" onClick={() => toggleViewType('list')}
        color={viewType === 'list' ? 'var(--ifm-color-primary)' : '#ccc'} />
      <Icon icon='ph:grid-four' width="50" height="30" onClick={() => toggleViewType('grid')}
        color={viewType === 'grid' ? 'var(--ifm-color-primary)' : '#ccc'} />
      <Icon icon='ph:columns' width="50" height="30" onClick={() => toggleViewType('card')}
        color={viewType === 'card' ? 'var(--ifm-color-primary)' : '#ccc'} />
    </div>
  );
}

function BlogPostGridItems({ items }: BlogPostItemsProps): JSX.Element {
  return (
    <>
      {items.map(({ content: BlogPostContent }, index) => {
        const { metadata: blogMetaData, frontMatter } = BlogPostContent;
        const { title } = frontMatter;
        const { permalink, date, tags } = blogMetaData;
        const dateObj = new Date(date);
        const dateString = `${dateObj.getFullYear()}-${('0' + (dateObj.getMonth() + 1)).slice(-2)}-${('0' + dateObj.getDate()).slice(-2)}`;

        return (
          <div className="post__list-item" key={blogMetaData.permalink}>
            <Link to={permalink} className="post__list-title">
              {title}
            </Link>
            <div className="post__list-tags">
              {tags.length > 0 &&
                tags
                  .slice(0, 2)
                  .map(({ label, permalink: tagPermalink }, index) => (
                    <Link
                      key={tagPermalink}
                      className={`post__tags ${index < tags.length ? 'margin-right--sm' : ''}`}
                      to={tagPermalink}
                      style={{ fontSize: '0.75em', fontWeight: 500 }}>
                      {label}
                    </Link>
                  ))}
            </div>
            <div className="post__list-date">{dateString}</div>
          </div>
        );
      })}
    </>
  );
}

/* 随便看看 */
function BlogRecommend({ isPaginated, isCardView }: { isPaginated: boolean, isCardView: boolean }): JSX.Element {
  const globalData = useGlobalData();
  const blogPluginData = globalData?.['docusaurus-plugin-content-blog']?.[
    'default'
  ] as any;

  const blogData = blogPluginData?.blogs as BlogPost[];
  const recommendedPosts = blogData.filter(b => (b.metadata.frontMatter.sticky as number) > 0)
    .map(b => b.metadata)
    .sort((a, b) => (a.frontMatter.sticky as number) - (b.frontMatter.sticky as number))
    .slice(0, 8);

  // 没有 sticky 标记就不显示随便看看
  if (recommendedPosts.length === 0) {
    return <></>
  }

  return <>
    <div className="container-wrapper">
      <div className="container padding-vert--sm transition" style={!isCardView ? { maxWidth: 1200 } : {}} >
        {!isPaginated && (
          <h2 className='blog__section-title'>
            <Translate id="theme.blog.title.recommend">随便看看</Translate>
          </h2>
        )}
        <div className="row">
          <div className='col col--12'>
            <div className="bloghome__posts">
              <ul className="blog__recommend">
                <Fade direction="up" duration={800} triggerOnce={true}>

                  { /* 随便看看卡片列表 */ }
                  {recommendedPosts.map((post) => (
                    <li className={clsx('card')} key={post.permalink}>
                      {post.frontMatter.image && (
                        <div className={clsx('card__image')}>
                          <Image src={post.frontMatter.image!} alt={post.title} img={''} />
                        </div>
                      )}
                      <div className="card__body">
                        <h4>
                          <Link href={post.permalink}>
                            {post.title}
                          </Link>
                        </h4>
                        <p>{post.description}</p>
                      </div>
                    </li>
                  ))}

                </Fade>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}

function BlogListPageContent(props: Props) {
  const { metadata, items } = props;

  const isBlogOnlyMode = !metadata.permalink.includes('page');
  const isPaginated = metadata.page > 1;

  const { viewType, toggleViewType } = useViewType();

  const isCardView = viewType === 'card';
  const isListView = viewType === 'list';
  const isGridView = viewType === 'grid';

  return (
    <Layout wrapperClassName="blog=-list__page">
      {!isPaginated && isBlogOnlyMode && <Hero />}
      <BackToTopButton />

      {/* 随便看看 */}
      {!isPaginated && isBlogOnlyMode && <BlogRecommend isPaginated={isPaginated} isCardView={isCardView} />}


      {/* 最新博客 */}
      <div className="container-wrapper">
        <div
          className="container padding-vert--sm"
          style={!isCardView ? { maxWidth: 1200 } : {}}>
          {!isPaginated && (
            <h2 className='blog__section-title'>
              <Translate id="theme.blog.title.new">{`最新博客`}</Translate>
              &nbsp;
                  <svg
                    width="50"
                    height="50"
                    viewBox="2 2 31 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.8333 5.16666H5.16668C3.73293 5.16666 2.59626 6.31624 2.59626 7.74999L2.58334 23.25C2.58334 24.6837 3.73293 25.8333 5.16668 25.8333H25.8333C27.2671 25.8333 28.4167 24.6837 28.4167 23.25V7.74999C28.4167 6.31624 27.2671 5.16666 25.8333 5.16666ZM10.9792 19.375H9.42918L6.13543 14.8542V19.375H4.52084V11.625H6.13543L9.36459 16.1458V11.625H10.9792V19.375ZM17.4375 13.2525H14.2083V14.6992H17.4375V16.3267H14.2083V17.7604H17.4375V19.375H12.2708V11.625H17.4375V13.2525ZM26.4792 18.0833C26.4792 18.7937 25.8979 19.375 25.1875 19.375H20.0208C19.3104 19.375 18.7292 18.7937 18.7292 18.0833V11.625H20.3438V17.4504H21.8033V12.9037H23.4179V17.4375H24.8646V11.625H26.4792V18.0833Z"
                      fill="#4490D6"
                    />
                  </svg>
            </h2>
          )}
          <div className="row">
            <div className={'col col--12'}>
              <ViewTypeSwitch
                viewType={viewType}
                toggleViewType={toggleViewType}
              />
            </div>
          </div>
          <div className="row">
            <div className={isCardView ? 'col col--9' : 'col col--12'} style={{ transition: "all 0.3s ease" }}>
              <div className="bloghome__posts">
                {(isListView || isCardView) && (
                  <div className="bloghome__posts-list">
                  <BlogPostItems items={items} />
                  </div>
                )}
                {isGridView && (
                  <div className="bloghome__posts-grid">
                    <BlogPostGridItems items={items} />
                  </div>
                )}
                <BlogListPaginator metadata={metadata} />
              </div>
            </div>
            {isCardView && <BlogInfo />}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default function BlogListPage(props: Props): JSX.Element {
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage,
      )}>
      <BlogListPageMetadata {...props} />
      <BlogListPageContent {...props} />
    </HtmlClassNameProvider>
  );
}
