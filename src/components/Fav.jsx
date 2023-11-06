import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Button, Container } from "react-bootstrap";

const Favs = () => {
  const favs = useSelector((state) => state.favs.content);
  const dispatch = useDispatch();

  return (
    <Row>
      Favourites Jobs:
      <Col sm={12}>
        {favs.map((job, i) => (
          <li key={i} className="my-4">
            {job.title}
            <Button
              className="mx-3"
              variant="danger"
              onClick={() => {
                dispatch({
                  type: "REMOVE_FROM_favs",
                  payload: i,
                });
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-dash-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z" />
              </svg>
            </Button>
          </li>
        ))}
      </Col>
    </Row>
  );
};

export default Favs;
