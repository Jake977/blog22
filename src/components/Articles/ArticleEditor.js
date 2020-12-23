import React, {useState, useEffect, useRef, useCallback} from "react";
import ErrorsList from "../ErrorsList/ErrorsList";
import userService from "../../services/userService";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { Form, Input, Button, Spin } from "antd";
import { store } from "../../store";
import actionCreators from "../../actionCreators";

const formItemLayout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 }
};

const formSingleItemLayout = {
  wrapperCol: { span: 24, offset: 0 }
};

const mapStateToProps = (state) => ({
  editor: state.editor
});

const mapDispatchToProps = (dispatch) => ({
  onLoad: (payload) => dispatch(actionCreators.doEditorLoaded(payload)),
  onUnload: () => dispatch(actionCreators.doEditorUnloaded()),
  onSubmit: (payload, slug) => {
    dispatch(actionCreators.doArticleSubmitted(payload));
    store.dispatch(push(`/`)); //article/${slug}
  },
  onRedirect: () => dispatch(actionCreators.doRedirect())
});

function ArticleEditor(props) {
  const {errors, articleSlug, inProgress, onLoad, match, onUnload, onSubmit, editor} = props;
  const id = match.params.id;
  const prevPropsId = useRef(id);
  const [isLoading, setIsloading] = useState(false);
  const [formValues, setValue] = useState({});
  const [form] = Form.useForm();

  const setFormData = useCallback((editor) => {
    form.setFieldsValue({
      title: editor?.title || '',
      description: editor?.description || '',
      body: editor?.body || '',
      tags: editor?.tagList,
    });

    setValue(prev => ({
      ...prev,
      title: editor?.title,
      description: editor?.description,
      body: editor?.body,
      tags: editor?.tagList,
    }))
  },[form]);

  const doComponentDidUpdate = useCallback(() => {
    if (id !== prevPropsId.current) {
      if (prevPropsId.current) {
        onUnload();
      }
      if (id) {
        return onLoad(userService.articles.get(id));
      }
      onLoad(null);
    }
    setIsloading(false);
  }, [id, onLoad, onUnload]);

  useEffect(() => {
    function doShouldComponentUpdate() {
      if (prevPropsId.current !== id) {
        setIsloading(true);
      }
      prevPropsId.current = id;
    }
    doShouldComponentUpdate()
  }, [id]);

  //componentDidMount
  useEffect(() => {
    function doComponentDidMount() {
      if (id) {
        setIsloading(true);
        return onLoad(userService.articles.get(id));
      }
      setIsloading(false);
      onLoad(null);
      //componentWillUnmount
      return function () {
        onUnload()
      }
    }
    doComponentDidMount();
  }, [id, onLoad, onUnload]);

  useEffect(()=> {
    doComponentDidUpdate();
    setFormData(editor);
  }, [doComponentDidUpdate, editor, setFormData]);

  const changeTitle = (e) => {setValue(prev => ({...prev, title: e.target.value}))};
  const changeDescription = (e) => {setValue(prev => ({...prev, description: e.target.value}))};
  const changeBody = (e) => {e.persist(); setValue(prev => ({...prev, body: e.target.value}))};
  const changeTags = (e) => {e.persist(); setValue(prev => ({...prev, tags: e.target.value}))};

  const submitForm = () => {
    const article = {
      title: formValues.title,
      description: formValues.description,
      body: formValues.body,
      tagList: formValues.tags ? formValues.tags.split(',') : ''
    };

    const slug = { slug: id };
    const promise = id
        ? userService.articles.update(Object.assign(article, slug))
        : userService.articles.create(article);

    onSubmit(promise, articleSlug);
  };

  const initialValues = {
    title: editor?.title,
    description: editor?.description,
    body: editor?.body,
    tags: editor?.tagList
  };

  return isLoading ? (
      <div className="loadingPlaceHolder">
        <Spin tip="Loading..." size="large" />
      </div>
  ) : (
      <div className="editor-page">
        <div className="container page">
          <ErrorsList errors={errors}></ErrorsList>
          <div className='page__title'>
            {articleSlug ? 'Edit article' : 'Create new article'}
          </div>
          <div className="page__content">
          <Form
              {...formItemLayout}
              form={form}
              initialValues={initialValues}
              onFinish={submitForm}
          >
            <Form.Item
                label="Title"
                name="title"
                placeholder="Article Title"
                rules={[
                  {
                    required: true,
                    message: "Please input article title"
                  }
                ]}
            >
              <Input onChange={changeTitle} />
            </Form.Item>

            <Form.Item
                label="Description"
                name="description"
                placeholder="Short description"
                rules={[
                  {
                    required: true,
                    message: "Please input article description"
                  }
                ]}
            >
              <Input onChange={changeDescription} />
            </Form.Item>

            <Form.Item
                name="body"
                label="Article Text"
                placeholder="article text"
                rules={[
                  {
                    required: true,
                    message: "Please input article text"
                  }
                ]}
            >
              <Input.TextArea onChange={changeBody} />
            </Form.Item>

            <Form.Item name="tags" label="Tags" placeholder="Enter tags">
              <Input onChange={changeTags} />
            </Form.Item>

            <Form.Item {...formSingleItemLayout}>
              <Button
                  className="editor-form__btn"
                  type="primary"
                  htmlType="submit"
                  disabled={inProgress}
              >
                Submit Article
              </Button>
            </Form.Item>
          </Form>
          </div>
        </div>
      </div>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(ArticleEditor);
