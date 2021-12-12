var isAppendNode = false;
var refContainer;
var nftContainer;
var parentContainer;
var nftTitleWrapper;
var photoWrapper;

// test start

// import Onboard from 'bnc-onboard'
// import Web3 from 'web3'

// // set a variable to store instantiated web3
// let web3

// // head to blocknative.com to create a key
// const BLOCKNATIVE_KEY = 'blocknative-api-key'

// // the network id that your dapp runs on
// const NETWORK_ID = 1

// // initialize onboard
// const onboard = Onboard({
//   dappId: BLOCKNATIVE_KEY,
//   networkId: NETWORK_ID,
//   subscriptions: {
//     wallet: wallet => {
//       // instantiate web3 when the user has selected a wallet
//       web3 = new Web3(wallet.provider)
//       console.log(`${wallet.name} connected!`)
//     }
//   }
// })

// // Prompt user to select a wallet
// await onboard.walletSelect()

// // Run wallet checks to make sure that user is ready to transact
// await onboard.walletCheck()

// test end


const DOMAIN = {
  FACEBOOK: 'facebook.com',
  INSTAGRAM: 'instagram.com',
  LINKEDIN: 'linkedin.com'
}

const IMG_SRC = {
  IMG1: 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/260070118_263857175792145_7063038385950410200_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=a26aad&_nc_ohc=DT33bdiyzP4AX8CUFwp&_nc_ht=scontent.ftpe8-4.fna&oh=ca4eca876996a25195670342aadc053f&oe=61B1DA83',
  IMG2: 'https://scontent.ftpe8-3.fna.fbcdn.net/v/t39.30808-6/259746459_263857172458812_9172240450835758031_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=a26aad&_nc_ohc=61wyJcUCsqwAX_3dA6r&_nc_ht=scontent.ftpe8-3.fna&oh=76a22cd6e0d96b403f4c60a7854f9eb5&oe=61B1B4A1',
  IMG3: 'https://scontent.ftpe8-3.fna.fbcdn.net/v/t39.30808-6/260294651_263857169125479_3002564134329985715_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=a26aad&_nc_ohc=6eLWtiqB2xQAX-KqKLn&tn=uwfpGvPTkhQO3bn2&_nc_ht=scontent.ftpe8-3.fna&oh=3209e05640994f325bd4ee6cfb7e857a&oe=61B21D3E',
  IMG4: 'https://scontent.ftpe8-1.fna.fbcdn.net/v/t39.30808-6/259852469_263857182458811_3047287035393088338_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=a26aad&_nc_ohc=4FOA1TYgsTwAX-hnILP&_nc_oc=AQnw5fAr3kV3oQYuvdJ9I9kIUretzUS-HUsXQ7M1i621Z-Xe8l5zDECj484sX1E8RM0&_nc_ht=scontent.ftpe8-1.fna&oh=b1953609606f593a351fe1398b7de4e4&oe=61B0ADC6',
  IMG5: 'https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/260002296_263857179125478_8254362087414050149_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=a26aad&_nc_ohc=fALWFI3JKH0AX9uKXgM&_nc_ht=scontent.ftpe8-2.fna&oh=664bd8c5cc5570d0f928a027db795a53&oe=61B151DC',
  IMG6: 'https://scontent.ftpe8-1.fna.fbcdn.net/v/t39.30808-6/260277864_263857165792146_48577633411799369_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=a26aad&_nc_ohc=n03HNI2UsDcAX_wGCMO&tn=uwfpGvPTkhQO3bn2&_nc_ht=scontent.ftpe8-1.fna&oh=6647a50447726a79806307e9425526d3&oe=61B11437',
  IMG7: 'https://scontent.ftpe8-1.fna.fbcdn.net/v/t39.30808-6/260277864_263857165792146_48577633411799369_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=a26aad&_nc_ohc=n03HNI2UsDcAX_wGCMO&tn=uwfpGvPTkhQO3bn2&_nc_ht=scontent.ftpe8-1.fna&oh=6647a50447726a79806307e9425526d3&oe=61B11437',
  IMG8: 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/257549973_259077796270083_8648397045544253057_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=a26aad&_nc_ohc=sRRRkwtoSqUAX-fJbKp&_nc_ht=scontent.ftpe8-4.fna&oh=5748b800a961df9b71f924a94f10ec6d&oe=61B09C8A',
  IMG9: 'https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/257632693_259075259603670_9070485547290541240_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=a26aad&_nc_ohc=XDUip2fA0ioAX8rsZ9Y&_nc_ht=scontent.ftpe8-2.fna&oh=39c99d8c26efdbd836a89bfdddd556ca&oe=61B17054'
}

// 計算圖片連結的數量
const countImgSrcsLength = (object) => {
  var arr = Object.keys(object);
  var len = arr.length;
  return len;
}

const showEvent = () => {
  let locationHost = window.location.host;
  switch (true) {
    case (locationHost.indexOf(DOMAIN.FACEBOOK) > -1):
      // 限制執行一次
      if (isAppendNode === false) {
        // 取得 FB 參考用 refContainer 複製為 nftContainer
        refContainer = document.querySelectorAll('[data-pagelet="ProfileTilesFeed_1"]')[0];
        nftContainer = refContainer.cloneNode(true);
        nftContainer.id = 'nftContainer';
        // 取得 FB 參考用 refContainer 的父層並將 nftContainer 插入在參考用 refContainer 之前
        parentContainer = refContainer.parentNode;
        parentContainer.insertBefore(nftContainer, refContainer);
        // 修改 nftContainer 標題
        nftTitleWrapper = document.getElementsByClassName("oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 nc684nl6 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl gmql0nx0 gpro0wi8 hnhda86s")[0];
        nftTitleWrapper.textContent = 'MyNFTs';
        nftTitleWrapper.id = 'nftTitle';
        // 修改 nftContainer 查看所有 NFTs 標題
        nftShowMoreButton = document.getElementsByClassName("a8c37x1j ni8dbmo4 stjgntxs l9j0dhe7 ltmttdrg g0qnabr5")[7];
        nftShowMoreButton.id = 'nftShowMoreButton';
        nftShowMoreButton.textContent = '查看所有 NFTs';
        // 修改圖片連結
        nftSlot1 = document.getElementById('nftContainer').getElementsByClassName('datstx6m bixrwtb6 k4urcfbm ue3kfks5')[0];
        nftSlot2 = document.getElementById('nftContainer').getElementsByClassName('datstx6m bixrwtb6 k4urcfbm')[1];
        nftSlot3 = document.getElementById('nftContainer').getElementsByClassName('datstx6m bixrwtb6 k4urcfbm')[2];
        nftSlot4 = document.getElementById('nftContainer').getElementsByClassName('datstx6m bixrwtb6 k4urcfbm')[3];
        nftSlot5 = document.getElementById('nftContainer').getElementsByClassName('datstx6m bixrwtb6 k4urcfbm')[4];
        nftSlot6 = document.getElementById('nftContainer').getElementsByClassName('datstx6m bixrwtb6 k4urcfbm')[5];
        nftSlot7 = document.getElementById('nftContainer').getElementsByClassName('datstx6m bixrwtb6 k4urcfbm')[6];
        nftSlot8 = document.getElementById('nftContainer').getElementsByClassName('datstx6m bixrwtb6 k4urcfbm')[7];
        nftSlot9 = document.getElementById('nftContainer').getElementsByClassName('datstx6m bixrwtb6 k4urcfbm')[8];
        nftSlot1.src = 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/260070118_263857175792145_7063038385950410200_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=a26aad&_nc_ohc=DT33bdiyzP4AX8CUFwp&_nc_ht=scontent.ftpe8-4.fna&oh=ca4eca876996a25195670342aadc053f&oe=61B1DA83';
        nftSlot2.src = 'https://scontent.ftpe8-3.fna.fbcdn.net/v/t39.30808-6/259746459_263857172458812_9172240450835758031_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=a26aad&_nc_ohc=61wyJcUCsqwAX_3dA6r&_nc_ht=scontent.ftpe8-3.fna&oh=76a22cd6e0d96b403f4c60a7854f9eb5&oe=61B1B4A1';
        nftSlot3.src = 'https://scontent.ftpe8-3.fna.fbcdn.net/v/t39.30808-6/260294651_263857169125479_3002564134329985715_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=a26aad&_nc_ohc=6eLWtiqB2xQAX-KqKLn&tn=uwfpGvPTkhQO3bn2&_nc_ht=scontent.ftpe8-3.fna&oh=3209e05640994f325bd4ee6cfb7e857a&oe=61B21D3E';
        nftSlot4.src = 'https://scontent.ftpe8-1.fna.fbcdn.net/v/t39.30808-6/259852469_263857182458811_3047287035393088338_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=a26aad&_nc_ohc=4FOA1TYgsTwAX-hnILP&_nc_oc=AQnw5fAr3kV3oQYuvdJ9I9kIUretzUS-HUsXQ7M1i621Z-Xe8l5zDECj484sX1E8RM0&_nc_ht=scontent.ftpe8-1.fna&oh=b1953609606f593a351fe1398b7de4e4&oe=61B0ADC6';
        nftSlot5.src = 'https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/260002296_263857179125478_8254362087414050149_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=a26aad&_nc_ohc=fALWFI3JKH0AX9uKXgM&_nc_ht=scontent.ftpe8-2.fna&oh=664bd8c5cc5570d0f928a027db795a53&oe=61B151DC';
        nftSlot6.src = 'https://scontent.ftpe8-1.fna.fbcdn.net/v/t39.30808-6/260277864_263857165792146_48577633411799369_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=a26aad&_nc_ohc=n03HNI2UsDcAX_wGCMO&tn=uwfpGvPTkhQO3bn2&_nc_ht=scontent.ftpe8-1.fna&oh=6647a50447726a79806307e9425526d3&oe=61B11437';
        nftSlot7.src = 'https://scontent.ftpe8-1.fna.fbcdn.net/v/t39.30808-6/260277864_263857165792146_48577633411799369_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=a26aad&_nc_ohc=n03HNI2UsDcAX_wGCMO&tn=uwfpGvPTkhQO3bn2&_nc_ht=scontent.ftpe8-1.fna&oh=6647a50447726a79806307e9425526d3&oe=61B11437';
        nftSlot8.src = 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/257549973_259077796270083_8648397045544253057_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=a26aad&_nc_ohc=sRRRkwtoSqUAX-fJbKp&_nc_ht=scontent.ftpe8-4.fna&oh=5748b800a961df9b71f924a94f10ec6d&oe=61B09C8A';
        nftSlot9.src = 'https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/257632693_259075259603670_9070485547290541240_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=a26aad&_nc_ohc=XDUip2fA0ioAX8rsZ9Y&_nc_ht=scontent.ftpe8-2.fna&oh=39c99d8c26efdbd836a89bfdddd556ca&oe=61B17054';
        isAppendNode = true;
      }
      break;
    case (locationHost.indexOf(DOMAIN.INSTAGRAM) > -1):
      // 限制執行一次
      if (isAppendNode === false) {
        console.log('this is Instagram nft code');
        isAppendNode = true;
      }
      break;
    case (locationHost.indexOf(DOMAIN.LINKEDIN) > -1):
      // 限制執行一次
      if (isAppendNode === false) {
        // 新增 nftContainer
        nftContainer = document.createElement("section");
        // nftContainer 取用參考用 refContainer 的樣式設定
        nftContainer.className = 'artdeco-card ember-view break-words mt4 pb3';
        nftContainer.id = 'nftContainer';
        // 取得 Linkedin 參考用 refContainer
        refContainer = document.getElementsByClassName('artdeco-card ember-view break-words mt4 pb3')[0];
        // 取得 Linkedin 參考用 refContainer 的父層並將 nftContainer 插入在參考用 refContainer 之前
        parentContainer = refContainer.parentNode;
        parentContainer.insertBefore(nftContainer, refContainer);

        // 取得參考用 refContainer
        var title = document.getElementsByClassName('pvs-header__container')[0];
        nftContainer.appendChild(title);
        // 把標題改為 NFT
        title.getElementsByTagName('span')[0].textContent = 'NFT';
        console.log(title.getElementsByTagName('span')[0]);
        // 新增圖片容器
        photoWrapper = document.createElement("div");
        photoWrapper.id = 'photoWrapper';
        nftContainer.appendChild(photoWrapper);
        photoWrapper.style.setProperty('width', '100%');
        photoWrapper.style.setProperty('padding', '20px');
        photoWrapper.style.setProperty('display', 'grid');
        photoWrapper.style.setProperty('grid-template-columns', 'repeat(auto-fit, minmax(100px, 1fr))');
        photoWrapper.style.setProperty('grid-column-gap', '10px');
        photoWrapper.style.setProperty('grid-row-gap', '10px');
        for (var i = 0; i < 9; i++) {
          var slot = document.createElement("img");
          slot.id = `slot${i + 1}`;
          slot.src = 'https://media.npr.org/assets/img/2021/03/05/nyancat-still-6cda3c8e01b3b5db14f6db31ce262161985fb564-s1100-c50.png';
          slot.style.setProperty('width', 'inherit')
          photoWrapper.appendChild(slot);
        }

        isAppendNode = true;
      }
      break;
  }
};

const hideEvent = () => {
  nftContainer.remove();
  isAppendNode = false;
}

const onMessage = (message) => {
  switch (message.action) {
    case 'SHOW':
      showEvent();
      break;
    case 'HIDE':
      hideEvent();
      break;
    default:
      break;
  }
}

chrome.runtime.onMessage.addListener(onMessage);
