import styled, { css } from "styled-components";

export const CustonTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  /* contain: layout inline-size; */

  > thead {
    background: ${p => p.theme.colors.panel};

    > tr th {
      font-size: ${p => p.theme.fontSize.md};
      font-weight: medium;
      /* letter-spacing: 0.035rem; */
      color: ${p => p.theme.colors.text};
      //color: #FFFFFF;
      opacity: 1;
      padding: ${p => p.theme.space[4]};
      vertical-align: top;
      text-align: left;
      border: ${p => p.theme.space.px} solid ${p => p.theme.colors["gray-400"]}; //#dee2e685;
      border-width: 0.2rem 0rem 0.2rem 0rem;
    }
  }
  > tbody tr td {
    font-size: ${p => p.theme.fontSize.md};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: ${p => p.theme.space[2]};
    min-width: min-content;
    letter-spacing: 0.035rem;
    //font-weight: normal;
    color: ${p => p.theme.colors.text};
    background: ${p => p.theme.colors.panel};
    padding: 1rem;
    /* text-align: center; */
    border: 1px solid ${p => p.theme.colors["gray-400"]};
    border-width: 0rem 0rem 0.1rem 0rem;
  }

  @media (max-width: 768px) {
    > tr {
      margin-bottom: 1rem;
    }
    > thead {
      display: none;
    }
    > tbody, tr, td {
      display: block;
      width: 100%;
    }
    > tbody tr {
      margin-bottom: 1rem;
      > td {
        /* text-align: right; */
        padding-left: 50%;
        position: relative;
        text-overflow: ellipsis;
        white-space: nowrap;
        &::before {
          content: attr(data-label);
          position: absolute;
          left: 0;
          width: 50%;
          padding-left: 1.5rem;
          font-weight: 600;
          /* font-size: 1.4rem; */
          text-align: left;
        }
      }
    }
  }
`;