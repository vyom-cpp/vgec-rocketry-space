import { ImageList, ImageListItem, useMediaQuery } from "@mui/material"
import { AboutUsPageContent } from "../utils/content"
import React from "react"
import { theme } from "../theme";
export const Gallery = () => {
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const srcset = (image: string, size: number, rows = 1, cols = 1) => {
        return {
          src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
          srcSet: `${image}?w=${size * cols}&h=${
            size * rows
          }&fit=crop&auto=format&dpr=2 2x`,
        };
      }

    return (
        <ImageList
            sx={{ 
                width: "100%",
                height: "75vh",
                margin: 0
            }}
            gap={6}
            variant="quilted"
            cols={isSmallScreen ? 3 : 8}  // Set columns to 3 for small screens
            rowHeight={isSmallScreen ? 150 : 180} // Adjust row height for small screens
            >
                {AboutUsPageContent.gallery.map((item) => (
                    <ImageListItem
                        key={item.img}
                        cols={isSmallScreen ? (item.sm_cols || 1) : (item.cols || 1)}
                        rows={isSmallScreen ? (item.sm_rows || 1) : (item.rows || 1)}
                    >
                    <img
                        {...srcset(item.img, 121, item.rows, item.cols)}
                        loading="lazy"
                        style={{ objectFit: "cover", height: "100%", width: "100%" }}
                    />
                    </ImageListItem>
                ))}
        </ImageList>
    )
}