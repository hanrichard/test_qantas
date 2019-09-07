import { css } from 'styled-components';

const componentStyle = css`
  .AirportList__list {
    margin-bottom: 60px;
  }

  .AirportList__link {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 20px; 
    box-sizing: border-box;
  }

  .AirportList__card {
    margin-bottom: 20px;
  }

  .AirportList__pagination {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;

    .pagination {
      display: inline-block;
      padding-left: 0;
      margin: 10px 0;
      border-radius: 4px;

      li {
        display: inline;
      }
    }

    .pagination>li:first-child>a, 
    .pagination>li:first-child>span {
      margin-left: 0;
      border-bottom-left-radius: 4px;
      border-top-left-radius: 4px;
    }

    .pagination>li>a, 
    .pagination>li>span {
        position: relative;
        float: left;
        padding: 6px 12px;
        line-height: 1.42857143;
        text-decoration: none;
        color: #337ab7;
        background-color: #fff;
        border: 1px solid #ddd;
        margin-left: -1px;
    }

    .pagination>.active>a, 
    .pagination>.active>a:focus, 
    .pagination>.active>a:hover, 
    .pagination>.active>span, 
    .pagination>.active>span:focus, 
    .pagination>.active>span:hover {
      z-index: 3;
      color: #fff;
      background-color: #337ab7;
      border-color: #337ab7;
      cursor: default;
    }
  }
`

export default componentStyle