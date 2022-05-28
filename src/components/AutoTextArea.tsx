import React, {
  useState,
  useEffect,
  useRef,
  TextareaHTMLAttributes,
  forwardRef,
} from 'react';

const AutoTextArea = forwardRef(
  (props: TextareaHTMLAttributes<HTMLTextAreaElement>, ref) => {
    const [text, setText] = useState('');
    const [textAreaHeight, setTextAreaHeight] = useState('auto');
    const [parentHeight, setParentHeight] = useState('auto');

    const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

    useEffect(() => {
      setParentHeight(`${textAreaRef.current!.scrollHeight}px`);
      setTextAreaHeight(`${textAreaRef.current!.scrollHeight}px`);
    }, [text]);

    useEffect(() => {
      textAreaRef.current?.focus();
    }, []);

    const onChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setParentHeight(`${textAreaRef.current!.scrollHeight}px`);
      setText(event.target.value);

      if (props.onChange) {
        props.onChange(event);
      }
    };

    return (
      <div
        style={{
          minHeight: parentHeight,
        }}
      >
        <textarea
          {...props}
          ref={textAreaRef}
          rows={1}
          style={{
            height: textAreaHeight,
          }}
          onChange={onChangeHandler}
        />
      </div>
    );
  }
);

export default AutoTextArea;
