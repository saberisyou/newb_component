import './styles.less';
// 热门广告
interface AdsItem {
  img?: string;
}
interface HotAdsProps {
  bannerImg: string;
  adsList: AdsItem[];
}
const HotAds = (props: HotAdsProps) => {
  const { bannerImg, adsList } = props;
  return (
    <div className='hot-ads-container'>
      <img className='ads-banner' src={bannerImg} />
      <ul className='hot-ads-list'>
        {adsList.map((e: AdsItem) => {
          return (
            <li className='hot-ads-list-item'>
              <img className='ads-img' src={e.img} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default HotAds;
