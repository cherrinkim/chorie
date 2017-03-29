using System;

using Xamarin.Forms;
using SkiaSharp;
using SkiaSharp.Views.Forms;

namespace chorie
{
	public class ActivityPage : ContentPage
	{
		public ActivityPage()
		{
			var layout = new AbsoluteLayout();

			var bottomStack = new StackLayout {
				BackgroundColor = Color.Olive,
				Orientation = StackOrientation.Horizontal
			};
			AbsoluteLayout.SetLayoutBounds(bottomStack, new Rectangle(0, 1, 1, .15));
			AbsoluteLayout.SetLayoutFlags(bottomStack, AbsoluteLayoutFlags.All);

			var leftStack = new StackLayout { 
				BackgroundColor = Color.Red 
			};
			AbsoluteLayout.SetLayoutBounds(leftStack, new Rectangle(0, 0, .15, .85));
			AbsoluteLayout.SetLayoutFlags(leftStack, AbsoluteLayoutFlags.All);

			var canvasView = new SKCanvasView();
			canvasView.PaintSurface += onPainting;
			AbsoluteLayout.SetLayoutBounds(canvasView, new Rectangle(1, 0, .85, .85));
			AbsoluteLayout.SetLayoutFlags(canvasView, AbsoluteLayoutFlags.All);



			var button1 = new Button
			{
				Text = "test",
				Font = Font.SystemFontOfSize(NamedSize.Large),
				BorderWidth = 1,
				HorizontalOptions = LayoutOptions.Center,
				VerticalOptions = LayoutOptions.Center,
			};

			var addNodeButton = new Button
			{
				Text = "Add Node",
				Font = Font.SystemFontOfSize(NamedSize.Large),
				BorderWidth = 1,
				HorizontalOptions = LayoutOptions.Center,
				VerticalOptions = LayoutOptions.Center,
			};

			var removeNodeButton = new Button
			{
				Text = "Remove Node",
				Font = Font.SystemFontOfSize(NamedSize.Large),
				BorderWidth = 1,
				HorizontalOptions = LayoutOptions.Center,
				VerticalOptions = LayoutOptions.Center,
			};

			var saveButton = new Button { 
				Text = "Save",
				Font = Font.SystemFontOfSize(NamedSize.Large),
				BorderWidth = 1,
				HorizontalOptions = LayoutOptions.Center,
				VerticalOptions = LayoutOptions.Center,
			};

			var scrapButton = new Button
			{
				Text = "Scrap Formation",
				Font = Font.SystemFontOfSize(NamedSize.Large),
				BorderWidth = 1,
				HorizontalOptions = LayoutOptions.Center,
				VerticalOptions = LayoutOptions.Center,
			};

			leftStack.Children.Add(button1);
			bottomStack.Children.Add(addNodeButton);
			bottomStack.Children.Add(removeNodeButton);
			bottomStack.Children.Add(saveButton);
			bottomStack.Children.Add(scrapButton);

			layout.Children.Add(bottomStack);
			layout.Children.Add(leftStack);
			layout.Children.Add(canvasView);

			Content = layout;

		}

		void onPainting(object sender, SKPaintSurfaceEventArgs e)
		{
			// we get the current surface from the event args
			var surface = e.Surface;
			// then we get the canvas that we can draw on
			var canvas = surface.Canvas;
			// clear the canvas / view
			canvas.Clear(SKColors.Aquamarine);
		}
	}
}

