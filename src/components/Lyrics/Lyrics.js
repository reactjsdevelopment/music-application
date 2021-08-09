import React from 'react';
import "./Lyrics.css";


export default function LyricsComponent(props) {
    const iframeCss = `
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet">
    <style>
      body, html {
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Roboto', sans-serif;
    
          scrollbar-width: thin;
          scrollbar-color: #ffa7b8 #fff;
      }
    
      html {
        padding-right: 6px;
      }
    
      // :hover selector is not used because it behaves strangely in here
    
      :active {
        scrollbar-color: #fe839b #fff;
      }
    
      ::-webkit-scrollbar {
        width: 7px;
        height: 7px;
        border-radius: 99px;
      }
    
      ::-webkit-scrollbar-track {
        background: #fff;
        border-radius: 99px;
      }
    
      ::-webkit-scrollbar-thumb {
        background: #ffa7b8;
        border-radius: 99px;
        cursor: pointer;
      }
    
      ::-webkit-scrollbar-thumb:active {
        background: #fe839b;
      }
    
      ::-webkit-scrollbar-corner {
        display: none;
      }
    
      .rg_embed_body * {
        background: none !important;
        color: #000 !important;
        pointer-events: none !important;
        cursor: default !important;
      }
      
      .rg_embed {
          margin: 0;
          width: 100%;
      }
    </style>
    `;
    // pass embed content here
      const geniusSong  = "<div id='rg_embed_link_1234' class='rg_embed_link' data-song-id='1234'>Read <a href='https://genius.com/Lil-wayne-got-money-lyrics'>“Got Money” by Lil Wayne</a> on Genius</div> <script crossorigin src='//genius.com/songs/1234/embed.js'></script>"
      return (
       
          <div className='lyricsSection'>
          <iframe
            // title={translate.lyrics}
            srcDoc={geniusSong + iframeCss}
            frameBorder='0'
            style={{ height: '100%', width: '100%' }}
            seamless
          />
        </div>
      );
    }
    