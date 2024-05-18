interface ItemHeaderProps {
  topLeftText: string;
  topRightText: string;
  bottomLeftText: string;
  bottomRightText: string;
}

const ItemHeader: React.FC<ItemHeaderProps> = ({
  topLeftText,
  topRightText,
  bottomLeftText,
  bottomRightText,
}) => {
  return (
    <div>
      <div className="flex flex-wrap justify-between">
        <p className="font-semibold text-lg">{topLeftText}</p>
        <p>{topRightText}</p>
      </div>
      <div className="flex flex-wrap justify-between">
        <p>{bottomLeftText}</p>
        <p>{bottomRightText}</p>
      </div>
    </div>
  );
};

export default ItemHeader;
