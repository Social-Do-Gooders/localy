import FavoriteIcon from '@material-ui/icons/Favorite';

function Footer(){

  const osas = "https://github.com/david-osas";
  const yashika = "https://github.com/yashika51";
  const nkosi = "https://github.com/nkosi-tauro";
  const aneesh = "https://github.com/aneeshkodali";

  return(
    <footer className='footer'>
      <p className='footer-text text-white'>Made with
        &nbsp;
        <FavoriteIcon className='footer-heart'/>
        &nbsp;
        by
        <a href={osas} className='footer-link' target='_blank' rel='noreferrer'> <em>Osas</em> </a>,
        <a href={yashika} className='footer-link' target='_blank' rel='noreferrer'> <em>Yashika</em> </a>,
        <a href={nkosi} className='footer-link' target='_blank' rel='noreferrer'> <em>Nkosi</em> </a>,
        <a href={aneesh} className='footer-link' target='_blank' rel='noreferrer'> <em>Aneesh</em> </a>
      </p>
    </footer>
  )
}

export default Footer;
